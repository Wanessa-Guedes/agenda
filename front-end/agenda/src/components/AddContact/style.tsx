import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #004aad;
  color: white;
  cursor: pointer;
  font-size: 20px;
  margin: 0 2% 2% 0;
  width: 40%;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  input {
    border: none;
    padding: 2%;
    border-radius: 20px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
