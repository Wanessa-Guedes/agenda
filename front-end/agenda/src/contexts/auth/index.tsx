import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../api";

interface ProviderProps {
  children: ReactNode;
}

interface InfosAuth {
  isLogged: boolean;
  login: (params: LoginInfos) => void;
  logout: () => void;
  checkLogin: () => void;
}

interface LoginInfos {
  token: string;
  id: number;
}

const AuthContext = createContext<InfosAuth>({} as InfosAuth);

export const AuthProvider = ({ children }: ProviderProps) => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const checkLogin = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
  };

  const login = ({ token, id }: LoginInfos) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", JSON.stringify(id));
    setIsLogged(true);
    navigate("/");
  };

  const logout = () => {
    localStorage.clear();
    setIsLogged(false);
    navigate("/sign-in");
    toast.success("Usuário deslogado");
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, login, logout, checkLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
