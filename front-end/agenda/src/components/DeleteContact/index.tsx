import { Dispatch, SetStateAction, useState } from "react";
import { DeleteModal } from "./deleteModal";
import { BsFillTrashFill } from "react-icons/bs";
import * as Style from "./style";

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
          <Style.DeleteButton onClick={handleModal}>
            <BsFillTrashFill />
          </Style.DeleteButton>
        </>
      )}
    </>
  );
};
