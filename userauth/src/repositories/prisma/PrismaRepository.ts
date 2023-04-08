import { User } from "@prisma/client";
import { prisma } from "../../prisma";
import { UpdateUserProps } from "../../use-cases/UserCases";
import { UserDatabase, UserProps, GetUserInfoProps } from "../UserRepository";

export class PrismaRepository implements UserDatabase {
  async createUser({ name, cpf, birthday, email, phone, password,  }: UserProps) {    
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

  async updateUser(id: string, {birthday, cpf, email, name, phone}: UpdateUserProps) {
    console.log(name);
    
    await prisma.user.update({where: {id}, data:{
      birthday,
      cpf,
      email,
      name,
      phone
    }})
  }

  async changePassword(id: string, password: string) {

    await prisma.user.update({
      where: {id}, data:{password}
    })
  }

  async deleteUser(id: string) {
    await prisma.user.delete({
      where: {
        id
      }
    })
  }

  async mailList() {
    return (await prisma.user.findMany()).map((u)=>{return u.email})
  };
  
}
