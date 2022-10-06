import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { api } from "../../api";
import * as Style from "./style";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

interface SignUpInterface {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signUpSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  userName: Joi.string().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInterface>({ resolver: joiResolver(signUpSchema) });

  function checkErrors() {
    console.log("errors", errors);
    if (Object.keys(errors).length !== 0) {
      toast.error("Erro ao fazer cadastro!");
    }
  }

  const doRegister = (infos: SignUpInterface) => {
    setLoading(true);
    api
      .post("/sign-up", infos)
      .then((res) => {
        navigate("/sign-in");
        setLoading(false);
      })
      .catch((error) => {
        console.log("error sign-in", error);
        setLoading(false);
        toast.error("Erro ao fazer cadastro!");
      });
  };

  return (
    <>
      <Style.Container>
        <p>AGENDA WEB</p>
        <Style.MainDiv>
          <p>Cadastrar</p>
          <ToastContainer />
          <form onSubmit={handleSubmit(doRegister)}>
            <input
              disabled={loading}
              placeholder="Nome do Usuário"
              {...register("userName")}
              required
            />
            <input
              disabled={loading}
              placeholder="E-mail"
              {...register("email")}
              required
            />
            <input
              disabled={loading}
              type={"password"}
              placeholder="Senha"
              {...register("password")}
              required
            />
            <input
              disabled={loading}
              type={"password"}
              placeholder="Confirme a senha"
              {...register("confirmPassword")}
              required
            />
            <button type="submit" onClick={checkErrors}>
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
            {loading ? (
              <></>
            ) : (
              <Link to={"/sign-in"}>Já possui cadastro? Entre aqui</Link>
            )}
          </form>
        </Style.MainDiv>
      </Style.Container>
    </>
  );
};

export default SignUp;
