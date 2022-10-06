import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../api";
import * as Style from "./style";

interface AddNewContactInterface {
  name: string;
  whatsapp: string;
  email: string;
  tel: string;
}

const AddNewContSchema = Joi.object({
  name: Joi.string().required(),
  whatsapp: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  tel: Joi.string().required(),
});

interface Props {
  newContact: boolean;
  setNewContact: Dispatch<SetStateAction<boolean>>;
}

export const AddContact = ({ newContact, setNewContact }: Props) => {
  const [addNewContact, setAddNewContact] = useState<boolean>(false);
  const [disbale, setDisable] = useState<boolean>(false);
  const [user, setUser] = useState<AddNewContactInterface>({
    name: "",
    whatsapp: "",
    email: "",
    tel: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddNewContactInterface>({
    resolver: joiResolver(AddNewContSchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function add() {
    setAddNewContact(!addNewContact);
  }

  function insertInfos(data: AddNewContactInterface) {
    setDisable(true);
    api
      .post("/contacts", data, headers)
      .then((res) => {
        setDisable(false);
        setAddNewContact(false);
        console.log("cadastrei", res.data);
        setNewContact(!newContact);
      })
      .catch((error) => {
        setDisable(false);
        setAddNewContact(false);
        console.log("erro ao cadastrar contato", error);
      });
  }

  function returnAdd(options: string) {
    if (options === "voltar") {
      setAddNewContact(false);
    }
  }

  useEffect(() => {
    reset(user);
  }, [addNewContact]);

  return (
    <>
      {addNewContact ? (
        <>
          <Style.Infos>
            <form onSubmit={handleSubmit(insertInfos)}>
              <input
                disabled={disbale}
                placeholder="Nome"
                {...register("name")}
              />
              <input
                disabled={disbale}
                placeholder="Whatsapp"
                {...register("whatsapp")}
              />
              <input
                disabled={disbale}
                placeholder="Email"
                {...register("email")}
              />
              <input
                disabled={disbale}
                placeholder="Telefone"
                {...register("tel")}
              />
              <Style.Button type="submit">Adicionar</Style.Button>
              <Style.Button onClick={() => returnAdd("voltar")}>
                Voltar
              </Style.Button>
            </form>
          </Style.Infos>
        </>
      ) : (
        <Style.Button onClick={add}>Adicionar Contato</Style.Button>
      )}
    </>
  );
};
