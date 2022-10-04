import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { api } from "../../api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInterface>({ resolver: joiResolver(signUpSchema) });

  const doRegister = (infos: SignUpInterface) => {
    api
      .post("/sign-up", infos)
      .then((res) => {
        console.log("infos sign-in", res.data);
        navigate("/sign-in");
      })
      .catch((error) => {
        console.log("error sign-in", error);
        toast.error("Erro ao fazer cadastro!");
      });
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(doRegister)}>
        <input
          placeholder="Nome do Usuário"
          {...register("userName")}
          required
        />
        <input placeholder="E-mail" {...register("email")} required />
        <input
          type={"password"}
          placeholder="Senha"
          {...register("password")}
          required
        />
        <input
          type={"password"}
          placeholder="Confirme a senha"
          {...register("confirmPassword")}
          required
        />
        <button type="submit">Cadastrar</button>
        <Link to={"/sign-in"}>Já possui cadastro? Entre aqui</Link>
      </form>
    </>
  );
};

export default SignUp;
