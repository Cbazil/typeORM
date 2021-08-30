import { getRepository } from "typeorm";
import { User } from "../entity/User";

class UserService {
  async register(firstName: string, email: string) {
    const userRepo = getRepository(User);
    const user = new User();
    user.firstName = firstName;
    user.email = email;

    return userRepo.save(user);
  }
}

export default new UserService();