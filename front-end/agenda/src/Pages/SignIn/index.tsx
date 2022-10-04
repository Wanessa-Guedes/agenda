import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useAuth } from "../../contexts/auth";
import { api } from "../../api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import * as Styled from "./style";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInterface>({ resolver: joiResolver(signInSchema) });

  const doLogin = (infos: SignInInterface) => {
    api
      .post("/sign-in", infos)
      .then((res) => {
        console.log("infos sign-in", res.data);
        login({ token: res.data.token, id: res.data.id });
      })
      .catch((error) => {
        console.log("error sign-in", error);
        toast.error("Erro ao fazer login!");
      });
  };

  return (
    <>
      <Styled.Container>
        <form onSubmit={handleSubmit(doLogin)}>
          <input placeholder="E-mail" {...register("email")} />
          <input
            type={"password"}
            placeholder="Senha"
            {...register("password")}
          />
          <button type="submit">Entrar</button>
          <Link to="/sign-up">Ainda não tem cadastro? Cadastra-se aqui</Link>
        </form>
      </Styled.Container>
    </>
  );
};

export default SignIn;
