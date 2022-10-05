import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactInfo } from "../InfosUser";
import { Infos } from "./style";

interface Props {
  item: ContactInfo;
}

interface EditInterface {
  whatsapp: string;
  email: string;
  tel: string;
}

const EditSchema = Joi.object({
  whatsapp: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  tel: Joi.string().required(),
});

export const ContactsInfos = ({ item }: Props) => {
  const [desabled, setDisabled] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditInterface>({ resolver: joiResolver(EditSchema) });

  function updateInfos() {
    console.log(register);
    setDisabled(true);
  }

  function update(options: string) {
    if (options === "atualizar") setDisabled(false);
    if (options === "voltar") setDisabled(true);
  }

  return (
    <>
      {/*       <Infos key={item.id}>
        <p>{item.whatsapp}</p>
        <p>{item.email}</p>
        <p>{item.tel}</p>
      </Infos> */}

      <form onSubmit={handleSubmit(updateInfos)}>
        <input
          disabled={desabled}
          placeholder="Whatsapp"
          defaultValue={`${item.whatsapp}`}
          {...register("whatsapp")}
        />
        <input
          disabled={desabled}
          placeholder="Email"
          defaultValue={`${item.email}`}
          {...register("email")}
        />
        <input
          disabled={desabled}
          placeholder="Telefone"
          defaultValue={`${item.tel}`}
          {...register("tel")}
        />
        {desabled ? (
          <>
            <button onClick={() => update("atualizar")}>Atualizar</button>
          </>
        ) : (
          <>
            <button type="submit">Registrar</button>
            <button onClick={() => update("voltar")}>Voltar</button>
          </>
        )}
      </form>
    </>
  );
};
