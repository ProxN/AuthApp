import { Query, Resolver, Authorized } from 'type-graphql';

@Resolver()
export class HelloReslover {
  @Authorized()
  @Query(() => String)
  hello() {
    return 'Hello World';
  }
}
