import { Injectable } from "@nestjs/common";
import { CreateUserInput } from "src/Model/users/createUser.dto";
import { deletedSuccess } from "src/Model/users/deletedSuccess.dto";
import { UserDTOInterface } from "src/Model/users/users.dto";
import { UserUpdateInput } from "src/Model/users/UserUpdate.dto";
import { UserRepository } from "src/repository/UserRepository";

@Injectable()
export class UserService {
  constructor (private readonly userRepository: UserRepository) {

  }

  async findAll () : Promise<UserDTOInterface[]> {
    return this.userRepository.findAll();
  }

  async findOne (id: string) : Promise<UserDTOInterface> {
    return await this.userRepository.findOne(id);
  }

  async create (createUserInput: CreateUserInput) : Promise<UserDTOInterface> {
    return await this.userRepository.create(createUserInput)
  }

  async remove (id: string): Promise<deletedSuccess> {
    const deleted = await this.userRepository.remove(id);
    if (deleted) {
      return {
        deleted: true
      }
    }
    return {
      deleted: false
    }
  }

  async update (id: UserUpdateInput, updateUser: CreateUserInput): Promise<UserDTOInterface> {
    return await this.userRepository.update(id.id, updateUser)
  }


}