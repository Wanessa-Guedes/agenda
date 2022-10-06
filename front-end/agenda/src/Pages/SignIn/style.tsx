import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  p {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-size: 50px;
    color: black;
  }
`;

export const MainDiv = styled.div`
  background-color: #38b6ff;
  width: 70%;
  height: 70vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-size: 25px;
    color: black;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  input {
    border: none;
    width: 80%;
    padding: 2%;
    margin-bottom: 2%;
    border-radius: 5px;
  }

  button {
    background-color: #004aad;
    border: none;
    border-radius: 3px;
    width: 20%;
    height: 7%;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin-bottom: 5px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
  }
`;
