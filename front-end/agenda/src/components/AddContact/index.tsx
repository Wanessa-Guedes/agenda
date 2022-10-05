import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../api";

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
  const {
    register,
    handleSubmit,
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
    console.log("entrei");
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
    if (options === "voltar") setAddNewContact(false);
  }

  return (
    <>
      {addNewContact ? (
        <>
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
            <button type="submit">Adicionar</button>
            <button onClick={() => returnAdd("voltar")}>Voltar</button>
          </form>
        </>
      ) : (
        <button onClick={add}>Adicionar Contato</button>
      )}
    </>
  );
};
