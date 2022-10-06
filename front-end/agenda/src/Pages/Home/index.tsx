import { useEffect, useState } from "react";
import { api } from "../../api";
import { AddContact } from "../../components/AddContact";
import { InfosContact, InfosUser } from "../../components/InfosUser";
import { Buttonlogout } from "../../components/Logout";
import { useAuth } from "../../contexts/auth";
import * as Style from "./style";

export const Home = () => {
  const { isLogged } = useAuth();
  const [newContact, setNewContact] = useState<boolean>(false);
  const [updateContact, setUpdateContact] = useState<boolean>(false);
  const [deleteContact, setDeleteContact] = useState<boolean>(false);
  const [contacts, setContacts] = useState<InfosContact[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    api.get("/contacts", headers).then((res) => {
      setContacts(res.data);
    });
  }, [token, isLogged, newContact, updateContact, deleteContact]);

  return (
    <>
      <Style.Container>
        <h3>Agenda Web</h3>
        <Buttonlogout />
        <Style.AllInfos>
          <Style.Header>
            <h5>Contatos</h5>
            <AddContact newContact={newContact} setNewContact={setNewContact} />
          </Style.Header>
          <Style.MainDiv>
            <InfosUser
              list={contacts}
              updateContact={updateContact}
              setUpdateContact={setUpdateContact}
              deleteContact={deleteContact}
              setDeleteContact={setDeleteContact}
            />
          </Style.MainDiv>
        </Style.AllInfos>
      </Style.Container>
    </>
  );
};
