import { useState } from "react";
import { ContactsInfos } from "../ContactsInfos";
import { InfosButton } from "../SeeMoreButton";

export interface ContactInfo {
  id: number;
  whatsapp: string;
  email: string;
  tel: string;
}

export interface InfosContact {
  name: string;
  contact_info: ContactInfo[];
}

interface InfosList {
  list: InfosContact[];
}

export const InfosUser = ({ list }: InfosList) => {
  const [toogleOpenInfos, setToogleOpenInfos] = useState<boolean>(true);
  const [infosContact, setInfosContact] = useState<string>("");

  return (
    <>
      {list.map((element, index) => (
        <>
          <p key={index}>{element.name}</p>
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
                <ContactsInfos key={item.email} item={item} />
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
