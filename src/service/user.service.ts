import { Injectable } from "@nestjs/common";
import { UserDTOInterface } from "src/Model/users/users.dto";
import { UserRepository } from "src/repository/UserRepository";

@Injectable()
export class UserService {
  constructor (private readonly userRepository: UserRepository) {

  }

  async findAll () : Promise<UserDTOInterface[]> {
    return this.userRepository.FindAll()
  }


}