import { Injectable } from "@nestjs/common";
import { CreateUserInput } from "./dto/create-user.input";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UsersRepository {
    constructor ( @InjectRepository(User) private readonly users: Repository<User>) {
    }

    async create ( createUserInput: CreateUserInput ) {
        const user = this.users.create(createUserInput)
        return this.users.save(user)
    }
}