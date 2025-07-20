type Context = {

    title: string

    user: string;
}

type PageContext = Context & {
    age: number
}

export type { Context, PageContext };