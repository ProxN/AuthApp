import {
  Resolver,
  Mutation,
  Arg,
  Query,
  Ctx,
  Authorized,
  InputType,
  Field,
} from 'type-graphql';
import User from '../entities/User';
import { Context } from '../types/context';

@InputType()
class UpdaeProfile implements Partial<User> {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  bio?: string;
}

@Resolver()
class UserResolver {
  @Authorized()
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: Context) {
    if (!req.user) return null;
    return req.user;
  }

  @Authorized()
  @Mutation(() => User)
  async updateProfile(
    @Arg('data') newProfile: UpdaeProfile,
    @Ctx() { req }: Context
  ): Promise<User | null> {
    await User.update({ id: req.user.id }, newProfile);

    const updatedUser = await User.findOne(req.user.id);
    if (updatedUser) return updatedUser;

    return null;
  }
}

export default UserResolver;
