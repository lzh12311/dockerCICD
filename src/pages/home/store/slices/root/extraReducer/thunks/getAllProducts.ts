import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from "../../../../../../../common/component/models/product";
import { RootState } from "../../../../state";
import getProduct from '../../../../../../../common/apis/getProduct/fetchProduct';
import { AsyncLock } from 'common/clients/asyncLock';

const key = "root/getProducts"

type LoadProductsResult = {

    products: Product[] | undefined;
}

const buildGetProductsAsync = (builder: ActionReducerMapBuilder<RootState>): void => {
    builder
        .addCase(getProductAsync.pending, (state, action) => {
            console.log("ZL: start to get all products" + action.meta.arg)
        })
        .addCase(getProductAsync.fulfilled,(state,action)=>{
            state.products = action.payload.products;
            console.log("ZL: fectched successfully");
        })
        .addCase(getProductAsync.rejected, (state,action)=>{
            console.error("failed to get procduct info")
        })
    
}


const getProductAsync = createAsyncThunk(key, async (props: any, thunkMethods): Promise<LoadProductsResult> => {
    const result: LoadProductsResult = {
        products: undefined,
    }
    
    await AsyncLock.runIfNotBusy(key,async ()=>{
        try {
            result.products = await getProduct();
        }catch(error){
            console.error("JZ: Failed to create the upload request with error:", error);
        }
    })
    return result;

})

export { buildGetProductsAsync, getProductAsync };