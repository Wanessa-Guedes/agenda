import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth";

interface ProvidersInfo {
  children: ReactNode;
}

const Provider = ({ children }: ProvidersInfo) => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>{children}</AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default Provider;
