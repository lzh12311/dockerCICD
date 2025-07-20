
import { DocumentNode, OperationVariables } from "@apollo/client";

import { mutation, query } from "common/clients/request";

/**
 * The name of the request.
 */
const name = "searchProductGraphQl";

/**
 * The base request of cancelSubscription.
 * @param document The document of the request.
 * @param variables The variables used in the request.
 * @returns The result of the request.
 * @throws The error in the request.
 */
const request = async <V extends OperationVariables, T>(document: DocumentNode, variables?: V): Promise<T> => {
  return query(document, name, variables);
}

export default request;
