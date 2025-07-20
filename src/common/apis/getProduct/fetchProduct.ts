import api from "..";
import { Product } from "../../component/models/product";



const getProduct = async (): Promise<Product[]> =>{

    const response = await api.get("/product/all")

    return response.data.data;
}

export default getProduct;