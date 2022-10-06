import { Dispatch, SetStateAction } from "react";
import { api } from "../../api";
import * as Style from "./style";

interface Props {
  id: number;
  deleteContact: boolean;
  setDeleteContact: Dispatch<SetStateAction<boolean>>;
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export const DeleteModal = ({
  id,
  deleteContact,
  setDeleteContact,
  modal,
  setModal,
}: Props) => {
  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function removeContact(id: number) {
    api
      .delete(`/contacts/${id}`, headers)
      .then((res) => {
        console.log("deletado");
        setDeleteContact(!deleteContact);
        setModal(false);
      })
      .catch((error) => {
        console.log("deu erro ao deletar contato", error);
        setModal(false);
      });
  }

  function closeModal() {
    setModal(false);
  }
  return (
    <>
      <Style.ModalContainer>
        <Style.Modal>
          <h6>Tem certeza que deseja deletar o contato?</h6>
          <Style.Button onClick={() => removeContact(id)}>Sim</Style.Button>
          <Style.Button onClick={closeModal}>Não</Style.Button>
        </Style.Modal>
      </Style.ModalContainer>
    </>
  );
};
