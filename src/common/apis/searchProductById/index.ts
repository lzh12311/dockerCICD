import api from "..";
import { Product } from "../../component/models/product"


type SearchProps = {
    keyword: string,
}


type SearchResult = {

    products: Product[]
    
}

const searchProdcut = async (searchParam: SearchProps): Promise<SearchResult> => {
    // Send the search parameter in the request body as JSON
    console.log("3333333333333333")
    const response = await api.post("/product/search", searchParam);
    console.log(response.data.data,"datadata")
    return {
        products: response.data.data.result,
    }
        // products: response.data.data,
    // Assuming the structure is { data: { products: [] } }
}

export default searchProdcut;