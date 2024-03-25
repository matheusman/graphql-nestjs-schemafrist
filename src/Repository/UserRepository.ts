import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/config/PrismaService";
import { CreateUserInput } from "src/Model/users/createUser.dto";
import { UserDTOInterface } from "src/Model/users/users.dto";

@Injectable()
export class UserRepository {
    constructor (private readonly prisma: PrismaService) {

    }

    async findAll () {
        return await this.prisma.user.findMany();
    }

    async findOne (id: string): Promise<UserDTOInterface > {
      return await this.prisma.user.findUnique({
        where: {
          id: id
        }
      })
    }

    async create (createUser: CreateUserInput): Promise<UserDTOInterface> {
      return await this.prisma.user.create({
        data: {
          ...createUser
        }
      })
    }

    async remove (id: string): Promise<UserDTOInterface> {
      return await this.prisma.user.delete({
        where: {
          id: id
        }
      })

    }

    async update (id: string, updateUser: CreateUserInput): Promise<UserDTOInterface> {
      const user = this.prisma.user.findUniqueOrThrow({
        where: {
          id: id
        }
      })
      if (user instanceof Error) {
        throw new Error("Not found")
      }
      return await this.prisma.user.update({where: { id: id }, data: {...updateUser}} )
    }
}