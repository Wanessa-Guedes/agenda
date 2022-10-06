import styled from "styled-components";

export const Infos = styled.div`
  display: flex;
  align-items: center;
  width: 60%;

  input {
    border: none;
    padding: 2%;
    border-radius: 20px;
    background-color: white;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10%;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #004aad;
  color: white;
  cursor: pointer;
  font-size: 20px;
  width: 20%;
`;
