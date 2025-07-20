import { DocumentNode, OperationVariables } from "@apollo/client";
import client from "../external/apollo";


const query = async <V extends OperationVariables, T>(query: DocumentNode, name: string, variables?: V): Promise<T> => {
    const resultData = (await client.query({
        query: query,
        variables: variables
    })).data;
    return resultData[name] as T;
};

const mutation = async <V extends OperationVariables, T>(mutation: DocumentNode, name: string, variables?: V): Promise<T> => {
    const resultData = (await client.mutate({
        mutation: mutation,
        variables: variables
    })).data;
    return resultData[name] as T;
};

export { query, mutation };