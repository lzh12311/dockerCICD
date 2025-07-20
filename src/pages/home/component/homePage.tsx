import { JSX } from "react";
import * as React from "react";
import * as PageStore from "../store/store";
import { PageContext } from "common/model/context";
import { Navigator } from "../../../common/router/navigtor";

type Home = {
    context: React.Context<PageContext>;
}

const HomePageContent: React.FC<Home> = props => {

    const [isLoading, setIsLoading] = React.useState(true);
    const context = React.useContext(props.context);

    const dispatch = PageStore.useDispatch();
    const products = PageStore.useSelector(state => state.root.products);

    React.useEffect(() => {
        dispatch(PageStore.rootAction.rootAction.getProductAsync({}))
            .unwrap()
            .catch()
            .finally(() => {
                setIsLoading(false)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const build = (): JSX.Element => {
        if (isLoading) {
            return (
                <div>
                    123123123
                    {context.title}
                </div>
            )
        } else {
            return (
                <div>
                    {context.title}
                    {context.title}
                    <button onClick={Navigator.navigateToSearch}>go to search</button>
                    <ul>
                        {products?.map((product, index) => (
                            <li key={index}>
                                {product.name}
                                <p>{product.price}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
    }
    return build();
}

export default HomePageContent;