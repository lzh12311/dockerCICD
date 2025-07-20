
import { gql } from "@apollo/client";
import { Product } from "common/component/models/product";
import request from "./index";

type SearchProductsResult = {
    list: {
        id: string,
        name: string,
        price: number
    }[],
    page: number,
    size: number,
    total: number,
}
type ProductList = {
    productsList: Product[],
    page: number,
    size: number,
    total: number,
}
type SearchDto = {
    keyword: string
}
type searchProductGraphQlProps = {
    searchDto: SearchDto
}

const document = gql`
query searchProductGraphQl($searchDto: SearchDto!) {
    searchProductGraphQl(searchDto: $searchDto) {
            list{
              id
              name
              price
            }
            page
            size
            total
    }
}
`
const searchProductGraphQl = async (variables: searchProductGraphQlProps): Promise<ProductList> => {
    console.log("here here here")
    return request(document, variables)
        .then(result => {
            console.log(result)
            const data = result as SearchProductsResult;
            console.log(data)
            if (!data) {
                throw new Error("Failed to create image content.");
            }
            return {
                productsList: data.list.map<Product>(product => ({
                    id: product.id,
                    name: product.name,
                    price: product.price
                })),
                page:data.page,
                size: data.size,
                total:data.total
            }
        })
}

export default searchProductGraphQl;
