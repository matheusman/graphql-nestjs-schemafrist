import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/config/PrismaService";

@Injectable()
export class UserRepository {
    constructor (private readonly prisma: PrismaService) {

    }

    async FindAll () {
        return await this.prisma.user.findMany()
    }
}