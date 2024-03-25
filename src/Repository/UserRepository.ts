import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/config/PrismaService";

@Injectable()
export class UserRepository {
    constructor (private prisma: PrismaService) {

    }

    async FindAll () {
        await this.prisma.user.findMany()
    }
}