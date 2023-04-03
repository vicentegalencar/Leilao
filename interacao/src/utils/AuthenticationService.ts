export interface AuthenticationService {
    VerifyToken: (req: any, res: any, next: any) => void
}