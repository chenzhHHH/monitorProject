import WebSocketService from '../utils/WebSocketService';

// 创建 WebSocketService 实例
const wsService = new WebSocketService('ws://example.com/socket');

// 设置消息回调函数
wsService.onmessage((message: string) => {
  console.log('Received message:', message);
});

// 连接到 WebSocket 服务器
wsService.connect();

// 发送消息到服务器
setTimeout(() => {
  wsService.send('Hello, WebSocket Server!');
}, 2000);

// 关闭连接
setTimeout(() => {
  wsService.close();
}, 5000);
