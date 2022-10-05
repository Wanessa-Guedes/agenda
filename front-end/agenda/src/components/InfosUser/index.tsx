import { Dispatch, SetStateAction, useState } from "react";
import { ContactsInfos } from "../ContactsInfos";
import { Delete } from "../DeleteContact";
import { InfosButton } from "../SeeMoreButton";

export interface ContactInfo {
  id: number;
  whatsapp: string;
  email: string;
  tel: string;
}

export interface InfosContact {
  id: number;
  name: string;
  contact_info: ContactInfo[];
}

interface InfosList {
  list: InfosContact[];
  updateContact: boolean;
  setUpdateContact: Dispatch<SetStateAction<boolean>>;
  deleteContact: boolean;
  setDeleteContact: Dispatch<SetStateAction<boolean>>;
}

export const InfosUser = ({
  list,
  updateContact,
  setUpdateContact,
  deleteContact,
  setDeleteContact,
}: InfosList) => {
  const [toogleOpenInfos, setToogleOpenInfos] = useState<boolean>(true);
  const [infosContact, setInfosContact] = useState<string>("");

  return (
    <>
      {list.map((element, index) => (
        <>
          <p key={index}>{element.name}</p>
          <Delete
            id={element.id}
            deleteContact={deleteContact}
            setDeleteContact={setDeleteContact}
          />
          {element.contact_info.map((item) =>
            toogleOpenInfos && element.name === infosContact ? (
              <>
                <InfosButton
                  value={"-"}
                  toogleOpenInfos={false}
                  setToogleOpenInfos={setToogleOpenInfos}
                  infosContact={element.name}
                  setInfosContact={setInfosContact}
                />
                <ContactsInfos
                  key={item.email}
                  item={item}
                  updateContact={updateContact}
                  setUpdateContact={setUpdateContact}
                />
              </>
            ) : (
              <InfosButton
                value={"+"}
                toogleOpenInfos={true}
                setToogleOpenInfos={setToogleOpenInfos}
                infosContact={element.name}
                setInfosContact={setInfosContact}
              />
            )
          )}
        </>
      ))}
    </>
  );
};
