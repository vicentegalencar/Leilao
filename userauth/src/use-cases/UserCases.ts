import { UserDatabase } from "../repositories/UserRepository";

export interface CreateUserProps {
    name: string;
    cpf: string;
    birthday: Date;
    email: string;
    phone: string;
    password: string;
}

export interface UpdateUserProps {
    name: string;
    cpf: string;
    birthday: Date;
    email: string;
    phone: string;
}


export class CreateUser {
    constructor(private userDatabase: UserDatabase) { }

    async execute({
        name,
        birthday,
        cpf,
        email,
        password,
        phone,
    }: CreateUserProps) {
        await this.userDatabase.createUser({
            name,
            birthday,
            cpf,
            email,
            password,
            phone,
        })
    }
}

export class UpdateUser {
    constructor(private userDatabase: UserDatabase) { }

    async execute(id: string, { birthday, cpf, email, name, phone }: UpdateUserProps) {
        await this.userDatabase.updateUser(id, { birthday, cpf, email, name, phone, })
    }
}

export class ChangePassword {
    constructor(private userDatabase: UserDatabase) { }
    async execute(id: string, oldpw: string, newpw: string) {
        const user = await this.userDatabase.getUserInfo({id})
        console.log(user.password, oldpw, newpw);
        
        if(user.password==oldpw) {
            await this.userDatabase.changePassword(id, newpw).then(()=>{
                return true
            })
        } else {
            throw new Error("Senhas nao coincidem");
            
        }
    }
}

export class DeleteUser {
    constructor(private userDatabase: UserDatabase) {}
    async execute(id: string) {
        this.userDatabase.deleteUser(id)
    }
}