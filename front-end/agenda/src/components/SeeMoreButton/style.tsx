import styled from "styled-components";

export const InfosButton = styled.button`
  background-color: #004aad;
  border: none;
  border-radius: 50%;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 25px;
  color: white;
  cursor: pointer;
  margin-bottom: 1%;
`;

export const TextInfos = styled.div`
  display: flex;
  width: 55%;
  align-items: flex-start;
  justify-content: space-around;

  span {
    padding: 2%;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-size: 15px;
    color: black;
  }
`;
