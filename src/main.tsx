import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SocketProvider } from "./contexts/SocketContext.tsx";
const queryClient = new QueryClient();

async function enableMocking() {
  // if (import.meta.env.DEV) {
  //   const { worker } = await import("./mocks/browser");
  //   return worker.start();
  // }
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <SocketProvider>
            <App />
          </SocketProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  );
});
