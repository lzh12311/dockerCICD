import * as AppStore from "common/store/store";
import React from "react";
import * as UserWebSocket from "common/clients/websocket";
type HeaderProps = {

    temp: string;
}


const Header: React.FC<HeaderProps> = props => {
    
    const userInfo = AppStore.useSelector(state => state.root.user)

    const build = (): React.JSX.Element => {
        return (
            userInfo ? (
                <div>
                    <div>{userInfo.alias}</div>
                    <div>{userInfo.displayName}</div>
                    <button onClick={ sendMessage}>test sendmessage</button>
                </div>
            ) :
                <div>123</div>
        )
    }
    const sendMessage = (): void => {
        UserWebSocket.sendMessage("test message");
    }
    return build();
}
export default Header;