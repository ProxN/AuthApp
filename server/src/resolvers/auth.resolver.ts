import {
  Resolver,
  Mutation,
  ObjectType,
  Field,
  ArgsType,
  Args,
  Ctx,
  Arg,
} from 'type-graphql';
import crypto from 'crypto';
import { MoreThan } from 'typeorm';
import User from '../entities/User';
import validate from '../utils/validate';
import { Context } from '../types/context';
import { generateToken, setTokenCookie } from '../utils/token';
import sendEmail from '../utils/sendEmail';

@ObjectType()
class FieldError {
  @Field()
  field!: string;
  @Field()
  message!: string;
}

@ObjectType()
class ErrorResponse {
  @Field(() => FieldError, { nullable: true })
  error?: FieldError;
}

@ObjectType()
class forgotPasswordResponse extends ErrorResponse {
  @Field(() => Boolean, { nullable: true })
  emailSent?: boolean;
}

@ObjectType()
class AuthResponse extends ErrorResponse {
  @Field(() => User, { nullable: true })
  user?: User;
}

@ArgsType()
class AuthArgs {
  @Field()
  email!: string;
  @Field()
  password!: string;
}

@Resolver()
class AuthResolver {
  @Mutation(() => AuthResponse)
  async register(
    @Args() { email, password }: AuthArgs,
    @Ctx() { res }: Context
  ): Promise<AuthResponse> {
    const error = validate(email, password);
    if (error) {
      return { error };
    }

    let user;
    let token;
    try {
      const result = await User.create({
        email,
        password,
      }).save();

      user = result;
      token = generateToken(result.id);
    } catch (err) {
      if (err.code === '23505') {
        return {
          error: {
            field: 'email',
            message: 'Email Already exists!',
          },
        };
      }
    }

    if (token) {
      setTokenCookie(res, token);
    }

    return { user: user };
  }

  @Mutation(() => AuthResponse)
  async login(
    @Args() { email, password }: AuthArgs,
    @Ctx() { res }: Context
  ): Promise<AuthResponse> {
    const error = validate(email, password);

    if (error) {
      return { error };
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.correctPassword(password, user.password))) {
      return {
        error: {
          field: 'emailOrPassword',
          message: 'Email or Password is incorrect!',
        },
      };
    }

    const token = generateToken(user.id);

    setTokenCookie(res, token);
    return { user };
  }

  @Mutation(() => forgotPasswordResponse)
  async forgotPassword(
    @Arg('email') email: string
  ): Promise<forgotPasswordResponse> {
    if (!email) {
      return {
        error: {
          field: 'email',
          message: 'Please provide an email!',
        },
      };
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return {
        error: {
          field: 'user',
          message: 'There is no user with this email address',
        },
      };
    }

    const resetToken = user.createResetToken();
    await user.save();

    const resetURL = `http://localhost:3000/resetPassword/${resetToken}`;

    await sendEmail({
      subject: 'Reset your password!!',
      to: user.email,
      message: `Reset your password using this link:${resetURL}`,
    });

    return { emailSent: true };
  }

  @Mutation(() => AuthResponse)
  async resetToken(
    @Arg('newPassword') newPassword: string,
    @Arg('resetToken') resetToken: string,
    @Ctx() { res }: Context
  ): Promise<AuthResponse> {
    if (!newPassword) {
      return {
        error: {
          field: 'newPassword',
          message: 'Please provide a new password!',
        },
      };
    }

    const hashToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    const user = await User.findOne({
      where: { resetToken: hashToken, resetTokenExpires: MoreThan(new Date()) },
    });

    if (!user) {
      return {
        error: {
          field: 'reset_token',
          message: 'Token is invalid or has expired',
        },
      };
    }

    user.password = newPassword;
    user.passwordChanged = new Date();
    user.resetToken = null;
    user.resetTokenExpires = null;
    await user.save();

    const token = generateToken(user.id);
    setTokenCookie(res, token);

    return { user };
  }
}

export default AuthResolver;
