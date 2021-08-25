declare global {
  interface Window {
    apiUrl: string;
    socketUrl: string;
  }
}

export const environment = {
  production: true,
  apiUrl: window.apiUrl,
  socketUrl: window.socketUrl,
};
