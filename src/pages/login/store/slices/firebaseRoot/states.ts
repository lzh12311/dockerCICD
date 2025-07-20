

type FirebaseLoginState = {
    email: string,
    password: string,
}


const RootEmptyState = (): FirebaseLoginState => {
    return {
        email: "",
        password: ""
    }
}

export {type FirebaseLoginState, RootEmptyState}