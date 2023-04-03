import axios from "axios";
import { AuthenticationService } from "./AuthenticationService";

export class UserAuth implements AuthenticationService {
  VerifyToken(req: any, res: any, next: any) {
    const token = req.headers["x-access-token"];
    console.log(token);
    
    if (!token)
      return res
        .status(401)
        .json({ auth: false, message: "Nenhum token informado" });
    axios.post('http://localhost:4000/user/info',{}, {headers: {"x-access-token": token}}).then((ver)=>{
        if (ver.data.auth) {
          req.userInfo = ver.data.userInfo
          next();
        }
        return res.json(ver)
    }).catch((err)=>{
      return res
      .status(401)
      .json({ auth: false, message: err });
    })
  }
}
