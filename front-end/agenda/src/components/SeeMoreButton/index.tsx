import { Dispatch, SetStateAction } from "react";
import * as Style from "./style";

interface Props {
  value: string;
  toogleOpenInfos: boolean;
  setToogleOpenInfos: Dispatch<SetStateAction<boolean>>;
  infosContact: string;
  setInfosContact: Dispatch<SetStateAction<string>>;
}

export const InfosButton = ({
  value,
  toogleOpenInfos,
  setToogleOpenInfos,
  infosContact,
  setInfosContact,
}: Props) => {
  function showInfos() {
    setToogleOpenInfos(toogleOpenInfos);
    setInfosContact(infosContact);
  }

  return (
    <>
      <Style.InfosButton onClick={showInfos}>{value}</Style.InfosButton>
      {value === "-" ? (
        <>
          <Style.TextInfos>
            <span>Whatsapp</span>
            <span>E-mail</span>
            <span>Telefone</span>
          </Style.TextInfos>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
