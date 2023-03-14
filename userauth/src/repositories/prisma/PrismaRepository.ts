import { User } from "@prisma/client";
import { prisma } from "../../prisma";
import { UserDatabase, UserProps, GetUserInfoProps } from "../UserRepository";

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

  async getUserInfo(props: GetUserInfoProps) {
    const {id, email} = props
    var user = null;
    if(id) {
      
      user = await prisma.user.findUnique({
      where: {
        id,
      },
    })} else {
      
      user = await prisma.user.findFirst({
      where: {
        email
      }
    });}
    return user as User
  }

  
}
