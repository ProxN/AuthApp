import {
  Resolver,
  Mutation,
  ObjectType,
  Field,
  ArgsType,
  Args,
  Ctx,
} from 'type-graphql';
import User from '../entities/User';
import validate from '../utils/validate';
import { Context } from '../types/context';

@ObjectType()
class FieldError {
  @Field()
  field!: string;
  @Field()
  message!: string;
}

@ObjectType()
class AuthResponse {
  @Field(() => FieldError, { nullable: true })
  error?: FieldError;

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
class authReslover {
  @Mutation(() => AuthResponse)
  async register(@Args() { email, password }: AuthArgs): Promise<AuthResponse> {
    const error = validate(email, password);
    if (error) {
      return { error };
    }

    let user;
    try {
      const result = await User.create({
        email,
        password,
      }).save();

      user = result;
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

    const user = await User.findOne({ where: { email: email } });

    if (!user || !(await user.correctPassword(password, user.password))) {
      return {
        error: {
          field: 'emailOrPassword',
          message: 'Email or Password is incorrect!',
        },
      };
    }

    return { user: user };
  }
}

export default authReslover;
