import { User } from "@prisma/client";

export interface UserProps {
    name: string;
    cpf: string;
    birthday: Date;
    email: string;
    phone: string;
    password: string;
    roles: string[];
}

export interface GetUserInfoProps {
    id?:string;
    email?:string;
}

export interface UserDatabase {
    createUser: (props: UserProps) => Promise<void>;
    getUserInfo: (props:GetUserInfoProps) => Promise<User>;
}