class WebSocketService {
  private socket: WebSocket | null = null;
  private onmessageCallback: ((message: string) => void) | null = null;
  private reconnectInterval: number = 5000; // 5 seconds
  private isReconnecting: boolean = false;

  constructor(private url: string) {}

  public connect(): void {
    if (this.socket) {
      console.log('WebSocket is already connected or connecting');
      return;
    }

    this.socket = new WebSocket(this.url);

    this.socket.onopen = () => {
      console.log('WebSocket connection established');
      this.isReconnecting = false;
    };

    this.socket.onmessage = (event: MessageEvent) => {
      console.log('Message from server:', event.data);
      if (this.onmessageCallback) {
        this.onmessageCallback(event.data);
      }
    };

    this.socket.onerror = (error: Event) => {
      console.error('WebSocket error:', error);
    };

    this.socket.onclose = () => {
      console.log('WebSocket connection closed');
      this.reconnect();
    };
  }

  private reconnect(): void {
    if (!this.isReconnecting) {
      this.isReconnecting = true;
      console.log('Attempting to reconnect...');
      setTimeout(() => {
        this.connect();
      }, this.reconnectInterval);
    }
  }

  public onmessage(callback: (message: string) => void): void {
    this.onmessageCallback = callback;
  }

  public send(message: string): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      console.error('WebSocket is not open. Ready state:', this.socket?.readyState);
    }
  }

  public close(): void {
    if (this.socket) {
      this.socket.close();
      this.isReconnecting = false; // Ensure no reconnection attempt is made
    }
  }
}

export default WebSocketService;
