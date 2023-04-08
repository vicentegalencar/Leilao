import { User } from "@prisma/client";
import { UpdateUserProps } from "../use-cases/UserCases";

export interface UserProps {
    name: string;
    cpf: string;
    birthday: Date;
    email: string;
    phone: string;
    password: string;
}

export interface GetUserInfoProps {
    id?:string;
    email?:string;
}

export interface UserDatabase {
    createUser: (props: UserProps) => Promise<void>;
    getUserInfo: (props:GetUserInfoProps) => Promise<User>;
    updateUser: (id: string, props: UpdateUserProps) => Promise<void>;
    changePassword: (id: string, password: string) => Promise<void>;
    deleteUser: (id:string)=> Promise<void>;
    mailList: ()=>Promise<string[]>
}