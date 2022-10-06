import { useAuth } from "../../contexts/auth";
import * as Style from "./style";

export const Buttonlogout = () => {
  const { logout } = useAuth();

  function out() {
    logout();
  }

  return (
    <>
      <Style.Button onClick={out}>Sair</Style.Button>
    </>
  );
};
