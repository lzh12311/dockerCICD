import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
    uri: "http://localhost:8081/graphql",
    fetchOptions:{
        timeout: 120000,
    }
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    defaultOptions:{
        query:{
            fetchPolicy:"no-cache"
        },
        mutate:{
            fetchPolicy: "no-cache"
        }
    }
});

export default client;