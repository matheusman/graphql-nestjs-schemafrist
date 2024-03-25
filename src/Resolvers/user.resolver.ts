import { Resolver, Query } from "@nestjs/graphql";
import { UserDTOInterface } from "src/Model/users/users.dto";
import { UserService } from "src/service/user.service";

@Resolver('User')
export class UserResolvers {
  constructor (private readonly userService: UserService) {

  }
    @Query("users")
    async users () : Promise<UserDTOInterface[]> {
        return this.userService.findAll();
    }
}