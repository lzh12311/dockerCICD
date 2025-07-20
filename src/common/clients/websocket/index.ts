

const userSocketUrl = "ws://localhost:8081/user";

let newSocket: WebSocket;
let currentSocket: WebSocket| undefined = undefined;

const createWebSocket = (): void => {
    if(currentSocket){
        return ;
    }
    newSocket = new WebSocket(userSocketUrl);
    currentSocket = newSocket;
    newSocket.onopen = () => {
        console.log("start to connect to webSocket");
        newSocket.send(JSON.stringify({ userId: "user123" }));
        console.log("User web socket registration sent");
    };

    // 接收到消息时的回调
    newSocket.onmessage = (event) => {
        const message = event.data;
        console.log("Received message:", message);
        // 处理消息
        handleMessage(message);
    };
    // 连接关闭时的回调
    newSocket.onclose = () => {
        console.log("WebSocket disconnected.");
        // 可以尝试重连
        setTimeout(() => createWebSocket(), 3000); // 3 秒后重连
    };

    // 发生错误时的回调
    newSocket.onerror = (error) => {
        console.error("WebSocket error:", error);
    };
}



/**
 * 发送消息到 WebSocket 服务器。
 * @param message 要发送的消息。
 */
const sendMessage = (message: string): void => {
    if (newSocket && newSocket.readyState === WebSocket.OPEN) {
        newSocket.send(message);
    } else {
        console.error("WebSocket is not connected.");
    }
};

/**
 * 处理接收到的消息。
 * @param message 接收到的消息。
 */
const handleMessage = (message: string): void => {
    // 根据消息内容进行处理
    console.log("Handling message:", message);
};

/**
 * 断开 WebSocket 连接。
 */
const disconnect = (): void => {
    if (newSocket) {
        newSocket.close();
        console.log("WebSocket disconnected.");
    }
};


export {
    createWebSocket,
    disconnect,
    handleMessage,
    sendMessage,
}