import { Dispatch, SetStateAction } from "react";

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
  function teste() {
    setToogleOpenInfos(toogleOpenInfos);
    setInfosContact(infosContact);
  }

  return (
    <>
      <button onClick={teste}>{value}</button>
    </>
  );
};
