import { Dispatch, SetStateAction, useState } from "react";
import { DeleteModal } from "./deleteModal";

interface Props {
  id: number;
  deleteContact: boolean;
  setDeleteContact: Dispatch<SetStateAction<boolean>>;
}

export const Delete = ({ id, deleteContact, setDeleteContact }: Props) => {
  const [modal, setModal] = useState<boolean>(false);

  function handleModal() {
    setModal(!modal);
  }
  return (
    <>
      {modal ? (
        <>
          <DeleteModal
            id={id}
            deleteContact={deleteContact}
            setDeleteContact={setDeleteContact}
            modal={modal}
            setModal={setModal}
          />
        </>
      ) : (
        <>
          <button onClick={handleModal}>Deletar</button>
        </>
      )}
    </>
  );
};
