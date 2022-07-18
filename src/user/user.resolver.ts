import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { createReadStream } from 'fs';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query()
  async getUser() {
    return 'value';
  }

  @Mutation()
  async upload(@Args('file') file: any) {
    console.log('1');
    return this.userService.upload(file);
  }
}
