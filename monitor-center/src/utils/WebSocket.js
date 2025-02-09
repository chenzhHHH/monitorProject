class WebSocketUtil {
    constructor(url) {
        this.url = url;
        this.socket = null;
        this.onOpenHandler = null;
        this.onMessageHandler = null;
        this.onErrorHandler = null;
        this.onCloseHandler = null;
        this.reconnectInterval = 5000; // 重连间隔时间（毫秒）
        this.maxReconnectAttempts = 10; // 最大重连次数
        this.reconnectAttempts = 0; // 当前重连次数
    }

    connect() {
        this.socket = new WebSocket(this.url);

        this.socket.onopen = (event) => {
            this.reconnectAttempts = 0; // 重置重连次数
            if (this.onOpenHandler) {
                this.onOpenHandler(event);
            }
        };

        this.socket.onmessage = (event) => {
            if (this.onMessageHandler) {
                this.onMessageHandler(event);
            }
        };

        this.socket.onerror = (event) => {
            if (this.onErrorHandler) {
                this.onErrorHandler(event);
            }
        };

        this.socket.onclose = (event) => {
            if (this.onCloseHandler) {
                this.onCloseHandler(event);
            }
            this.reconnect();
        };
    }

    send(message) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(message);
        } else {
            console.error('WebSocket is not open. Ready state:', this.socket.readyState);
        }
    }

    close() {
        if (this.socket) {
            this.socket.close();
        }
    }

    onOpen(handler) {
        this.onOpenHandler = handler;
    }

    onMessage(handler) {
        this.onMessageHandler = handler;
    }

    onError(handler) {
        this.onErrorHandler = handler;
    }

    onClose(handler) {
        this.onCloseHandler = handler;
    }

    reconnect() {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            console.log(`Reconnecting... Attempt ${this.reconnectAttempts + 1}`);
            setTimeout(() => {
                this.reconnectAttempts++;
                this.connect();
            }, this.reconnectInterval);
        } else {
            console.error('Max reconnect attempts reached. Giving up.');
        }
    }
}