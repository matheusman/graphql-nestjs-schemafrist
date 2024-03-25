import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { CreateUserInput } from "src/Model/users/createUser.dto";
import { deletedSuccess } from "src/Model/users/deletedSuccess.dto";
import { UserDTOInterface } from "src/Model/users/users.dto";
import { UserUpdateInput } from "src/Model/users/UserUpdate.dto";
import { UserService } from "src/service/user.service";

@Resolver('User')
export class UserResolvers {
  constructor (private readonly userService: UserService) { }

  @Query("users")
  async users () : Promise<UserDTOInterface[]> {
      return await this.userService.findAll();
  }

  @Query("user")
  async user (@Args('id') id: string) : Promise<UserDTOInterface> {
    return await this.userService.findOne(id);
  }

  @Mutation("createUser")
  async createUser (@Args("createUserInput") createUserInput: CreateUserInput) : Promise<UserDTOInterface> {
    return await this.userService.create(createUserInput);
  }

  @Mutation("deleteUser")
  async deeleteUser (@Args("id") id: string): Promise<deletedSuccess> {
    return await this.userService.remove(id);
  }

  @Mutation("updateUser")
  async updateUser (
    @Args("updateUserIdInput") updateUserIdInput: UserUpdateInput,
    @Args("updateUser") updateUserInput: CreateUserInput): Promise<UserDTOInterface> {
      return this.userService.update(updateUserIdInput, updateUserInput);
  }
}