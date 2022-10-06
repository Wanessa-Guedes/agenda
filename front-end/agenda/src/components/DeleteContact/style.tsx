import styled from "styled-components";

export const DeleteButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

export const ModalContainer = styled.main`
  background-color: rgba(0, 0, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
`;

export const Modal = styled.div`
  width: 20%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 2%;
  text-align: center;

  h6 {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-size: 20px;
    color: black;
  }

  button {
    width: 60%;
    border: none;
    margin-bottom: 5%;
    padding: 2%;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #004aad;
  color: white;
  cursor: pointer;
`;
