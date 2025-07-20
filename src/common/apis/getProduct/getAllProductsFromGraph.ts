
import { gql } from "@apollo/client";
import { Product } from "common/component/models/product";
import request from "./index";

type ProductsResult = {
        list:{
            id:string,
            name: string,
            price: number
        }[],
        code: string
}
type ProductList = {
    productsList: Product[]

}
const document = gql`
    query getAllProductsFromGraph{
        getAllProductsFromGraph{
            list{
                id
                name
                price
            }
            code
        }
    }
`
const getAllProductsFromGraph = async (): Promise<ProductList> => {
    console.log("here here here")
    return request(document)
        .then(result => {
            console.log(result)
            const data = result as ProductsResult;
            console.log(data)
            if (!data) {
                throw new Error("Failed to create image content.");
            }
            return {
                productsList: data.list.map<Product >(product=>({
                    id:product.id,
                    name: product.name,
                    price: product.price
                }))
            }
        })
}

export default getAllProductsFromGraph;
