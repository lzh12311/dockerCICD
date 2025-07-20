import { Product } from "../../../../../common/component/models/product"

type RootState ={
    products: Product[] | undefined;
}

const RootEmptyState = (): RootState =>{
    return {
        products: undefined,
    }
};

export {type RootState, RootEmptyState};