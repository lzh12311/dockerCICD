import api from "..";
import { ID } from "../../component/models/scalars"


type LoginProps = {
    userName: string,
    password: string
}


type LoginResult ={
    id :ID,
    userName: string
}

const userLogin = async (loginParam : LoginProps): Promise<LoginResult> =>{
    const result = await api.post("/login",loginParam);

    return result.data.data;
}

export default userLogin;