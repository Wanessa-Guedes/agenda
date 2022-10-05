import { useEffect, useState } from "react";
import { api } from "../../api";
import { AddContact } from "../../components/AddContact";
import { InfosContact, InfosUser } from "../../components/InfosUser";
import { useAuth } from "../../contexts/auth";

export const Home = () => {
  const { isLogged } = useAuth();
  const [newContact, setNewContact] = useState<boolean>(false);
  const [updateContact, setUpdateContact] = useState<boolean>(false);
  const [contacts, setContacts] = useState<InfosContact[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    api.get("/contacts", headers).then((res) => {
      console.log(res.data);
      setContacts(res.data);
    });
  }, [token, isLogged, newContact, updateContact]);

  return (
    <>
      <h1>Agenda Web</h1>
      <h3>Contatos</h3>
      <AddContact newContact={newContact} setNewContact={setNewContact} />
      <InfosUser
        list={contacts}
        updateContact={updateContact}
        setUpdateContact={setUpdateContact}
      />
    </>
  );
};
