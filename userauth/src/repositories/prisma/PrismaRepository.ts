import { prisma } from "../../prisma";
import { UserDatabase, UserProps } from "../UserRepository";

export class PrismaRepository implements UserDatabase {
  async createUser({ name, cpf, birthday, email, phone, password }: UserProps) {
    await prisma.user.create({
      data: {
        name,
        cpf,
        birthday,
        email,
        phone,
        password,
      },
    });
  }

  async getUserInfo(id: string) {
    await prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
