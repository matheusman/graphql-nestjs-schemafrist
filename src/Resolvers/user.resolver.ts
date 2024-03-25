import { Resolver, Query } from "@nestjs/graphql";
import { UserDTOInterface } from "src/Model/users/users.dto";

@Resolver('User')
export class UserResolvers {
    @Query("users")
    async users () : Promise<UserDTOInterface[]> {
        return [
            {
                id: "123",
                email: "1",
                name: "123",
                password: "123"
            }
        ]
    }
}