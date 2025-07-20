import * as React from "react";
import { JSX } from "react";
import * as Dom from "react-router-dom";

import store from "./store/store";
import { Provider } from "react-redux";
import SearchListPage, { TableProps } from "./component/descriptionFC";
import { Navigator } from "../../common/router/navigtor";
import { Badge, DescriptionsProps } from "antd";



const SearchPage: React.FC = (props) => {
    const navigate = Dom.useNavigate();
    const location = Dom.useLocation();

    const convertToDescriptionsItems = (userItems: TableProps['items']): DescriptionsProps['items'] => {
        return userItems?.map(item => ({
            label: item.label,
            span: 'filled',
            children: item.children,
        }));
    };
    const userInput: TableProps['items'] = [
        { label: 'UserName', children: 'Zhou Maomao' },
        { label: 'Live', children: 'Hangzhou, Zhejiang' },
        { label: "testBadge", children: <Badge status="processing" text="Running" /> },
        {
            label: "testChildren", children: (<>
                Data disk type: MongoDB
                <br />
                Database version: 3.4
                <br />
                Package: dds.mongo.mid
                <br />
                Storage space: 10 GB
                <br />
                Replication factor: 3
                <br />
                Region: East China 1
                <br />
            </>)
        },
        { label: 'Address', children: 'No. 18, Wantang Road, Xihu DistrictNo. 18, Wantang Road, Xihu DistrictNo. 18, Wantang Road, Xihu DistrictNo. 18, Wantang Road, Xihu DistrictNo. 18, Wantang Road,No. 18, Wantang Road, Xihu DistrictNo. 18, Wantang Road, Xihu DistrictNo. 18, Wantang Road, Xihu DistrictNo. 18, Wantang Road, Xihu DistrictNo. 18, Wantang Road, Xihu DistrictNo. 18, Wantang Road, No. 18, Wantang Road, Xihu DistrictXihu DistrictNo. 18, Wantang Road, Xihu District Xihu DistrictNo. 18, Wantang Road, Xihu DistrictNo. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China' }
    ];


    // const items: DescriptionsProps['items'] = [
    //     {
    //         label: 'UserName',
    //         span: "filled",
    //         children: 'Zhou Maomao',
    //     },
    //     {
    //         label: 'Live',
    //         span: 'filled',
    //         children: 'Hangzhou, Zhejiang',
    //     },
    //     {
    //         label: 'Remark',
    //         span: 'filled',
    //         children: 'empty',
    //     },
    //     {
    //         label: 'Description',
    //         span: "filled",
    //         children: 'No. sdsa18, Wantang Road,No. 18, Wantang Road, Xihu District, Hangzhou, No. 18, Wantang Road, Xihu District, Hangzhou,  Xihu DiNo. 18, Wantang Road, Xihu District, Hangzhou, No. 18, Wantang Road, Xihu District, Hangzhou, No. 18, Wantang Road, Xihu District, Hangzhou,No. 18, Wantang Road, Xihu District, Hangzhou, No. 18, Wantang Road, Xihu District, Hangzhou, No. 18, Wantang Road, Xihu District, HangzNo. 18, Wantang Road, Xihu District, Hangzhou, hou, No. 18, Wantang Road, Xihu District, Hangzhou,  No. 18, Wantang Road, Xihu District, Hangzhou, strict, Hangzhou, No. 18, Wantang Road, Xihu District, Hangzhou, No. 18, Wantang Road, Xihu District, Hangzhou, No. 18, Wantang Road, Xihu District, Hangzhou, No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    //     },
    // ];
    React.useEffect(() => {
        // eslint-disable-next-line
        Navigator.register(navigate)
    }, [location])

    const build = (): JSX.Element => {
        return (
            <Provider store={store}>
                <SearchListPage width={100} items={userInput} />
            </Provider>
        )
    }

    return build();
}

export default SearchPage;
