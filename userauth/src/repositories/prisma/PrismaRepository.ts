import { prisma } from "../../prisma";
import { UserDatabase, UserProps } from "../UserRepository";

export class PrismaRepository implements UserDatabase {
  async createUser({ name, cpf, birthday, email, phone, password, roles }: UserProps) {
    const rolesIds = await prisma.role.findMany({
      where: {name: {in: roles}}, select: {id: true}
    })
    await prisma.user.create({
      data: {
        name,
        cpf,
        birthday,
        email,
        phone,
        password,
        roles: {connect: rolesIds.map(id => (id))}
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
