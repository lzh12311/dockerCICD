import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit"
import { Product } from "../../../../../../../common/component/models/product";
import * as Store from "../../../../store"
import searchProductGraphQl from "common/apis/searchProducts/searchProduct";

type SearchDto = {
    keyword: string
}
type SearchProps = {
    searchDto: SearchDto;
};

type SearchResult = {

    products: Product[] | undefined;
}

const key = "searchProduct"

const buildSearchAsync = (builder: ActionReducerMapBuilder<Store.SearchResult>): void => {
    builder
        .addCase(searchAsync.pending, (state, action) => {
            console.log("start to fetch product info")
        })
        .addCase(searchAsync.fulfilled, (state, action) => {
            state.products = action.payload.products
            console.log(action.payload.products)
            console.log("successfully get the prodcuts info");
        })
        .addCase(searchAsync.rejected, (state, action) => {
            console.error("failed to get product info")
        })
}


const searchAsync = createAsyncThunk(key, async (props: SearchProps): Promise<SearchResult> => {
    const result: SearchResult = {
        products: undefined
    }
    console.log(props.searchDto.keyword)
    console.log("hefre")
    // AsyncLock.runIfNotBusy(key, async () => {
    try {
        // const resultInfo = await searchProdcut({
        //     keyword: props.key
        // })
        // console.log(resultInfo)
        // result.products = resultInfo.products;
        // console.log(result)
        // const resultInfo = await getAllProductsFromGraph();
        // console.log(resultInfo);
        // result.products = resultInfo.productsList;
        // console.log(result.products+"123131231231")
        const resultInfo = await searchProductGraphQl({ searchDto: props.searchDto })
        console.log(result);
        result.products = resultInfo.productsList;
    } catch (error) {
    }
    // })

    return result;
})

export { buildSearchAsync, searchAsync };