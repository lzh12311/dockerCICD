

type UserInfo = {
    displayName: string,
    alias: string,

}

type UserState = {
    user: UserInfo | undefined;
}

const RootEmptyState = (): UserState => {
    return {
        user: undefined
    }
}

export { type UserState, RootEmptyState }