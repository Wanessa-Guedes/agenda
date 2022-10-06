import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: -4%;
  margin-bottom: 2%;

  h3 {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-size: 50px;
    color: black;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

export const Header = styled.head`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: center;

  h5 {
    background-color: #38b6ff;
    border-radius: 20px;
    width: 90%;
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-size: 30px;
    color: black;
  }
`;

export const AllInfos = styled.div`
  background-color: #38b6ff;
  width: 90%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  margin-top: 2%;
`;
