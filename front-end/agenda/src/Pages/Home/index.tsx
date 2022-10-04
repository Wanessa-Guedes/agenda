import { useEffect, useState } from "react";
import { api } from "../../api";
import { InfosContact, InfosUser } from "../../components/InfosUser";
import { useAuth } from "../../contexts/auth";

export const Home = () => {
  const { isLogged } = useAuth();
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
  }, [token, isLogged]);

  return (
    <>
      <InfosUser list={contacts} />
    </>
  );
};
