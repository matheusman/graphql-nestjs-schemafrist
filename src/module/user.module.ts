import { Module } from "@nestjs/common";
import { UserResolvers } from "src/resolvers/user.resolver";

@Module({
    providers: [UserResolvers],
})
export class UserModule {

}