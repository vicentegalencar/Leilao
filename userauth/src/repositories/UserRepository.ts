export interface UserProps {
    name: string;
    cpf: string;
    birthday: Date;
    email: string;
    phone: string;
    password: string;
    roles: number[];
}

export interface UserDatabase {
    createUser: (props: UserProps) => Promise<void>;
    getUserInfo: (id: string) => Promise<void>
}