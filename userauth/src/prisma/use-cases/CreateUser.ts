import { UserDatabase } from "../../repositories/UserRepository";

export interface CreateUserProps {
    name: string;
    cpf: string;
    birthday: Date;
    email: string;
    phone: string;
    password: string;
    roles: string[];
}

export class CreateUser {
    constructor(private userDatabase: UserDatabase) {}

    async execute({
        name,
        birthday,
        cpf,
        email,
        password,
        phone,
        roles
    }: CreateUserProps) {
        await this.userDatabase.createUser({
            name,
            birthday,
            cpf,
            email,
            password,
            phone,
            roles
        })
    }
}