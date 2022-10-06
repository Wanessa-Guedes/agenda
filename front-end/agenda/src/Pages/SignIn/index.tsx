import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useAuth } from "../../contexts/auth";
import { api } from "../../api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

import * as Styled from "./style";
import { useState } from "react";

interface SignInInterface {
  email: string;
  password: string;
}

const signInSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
});

const SignIn = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInterface>({ resolver: joiResolver(signInSchema) });

  const doLogin = (infos: SignInInterface) => {
    setLoading(true);
    api
      .post("/sign-in", infos)
      .then((res) => {
        login({ token: res.data.token, id: res.data.id });
        setLoading(false);
      })
      .catch((error) => {
        console.log("error sign-in", error);
        setLoading(false);
        toast.error("Erro ao fazer login!");
      });
  };

  return (
    <>
      <ToastContainer />
      <Styled.Container>
        <p>AGENDA WEB</p>
        <Styled.MainDiv>
          <p>Entrar</p>
          <form onSubmit={handleSubmit(doLogin)}>
            <input
              disabled={loading}
              placeholder="E-mail"
              {...register("email")}
            />
            <input
              disabled={loading}
              type={"password"}
              placeholder="Senha"
              {...register("password")}
            />
            <button type="submit">{loading ? "Entrando..." : "Entrar"}</button>
            {loading ? (
              <></>
            ) : (
              <Link to="/sign-up">
                Ainda não tem cadastro? Cadastra-se aqui
              </Link>
            )}
          </form>
        </Styled.MainDiv>
      </Styled.Container>
    </>
  );
};

export default SignIn;
