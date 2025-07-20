import { ID } from "../../../../../common/component/models/scalars";


type LoginState = {
    userName: string;

    id: ID;
}

const LoginStateEmptyState= (): LoginState => {

    return {
        userName: "",
        id: ""
    }
}

export {type LoginState , LoginStateEmptyState};