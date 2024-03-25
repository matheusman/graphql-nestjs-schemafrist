import { Module } from "@nestjs/common";
import { PrismaService } from "src/config/PrismaService";
import { UserRepository } from "src/repository/UserRepository";
import { UserResolvers } from "src/resolvers/user.resolver";
import { UserService } from "src/service/user.service";

@Module({
    providers: [UserResolvers, UserService, UserRepository, PrismaService],
})
export class UserModule {

}