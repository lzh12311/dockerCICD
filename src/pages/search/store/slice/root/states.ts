import { Product } from "../../../../../common/component/models/product";


type SearchResult ={
    products: Product[]| undefined;
}

const searchEmptyData = (): SearchResult =>{
    return ({
        products: undefined
    })
}

export {type SearchResult, searchEmptyData};