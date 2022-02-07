import styled from "styled-components";

export const UserContainer = styled.div`
  width: 90%;

  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;

  color: #ffffff;

  padding-top: 25px;

  display: flex;
  justify-content: space-between;
`;

export const TransactionsContainer = styled.div`
  width: 90%;
  height: 100%;

  border-radius: 5px;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  justify-content: ${props => props.center !== "center" ? "flex-start" : props.center};
  position: relative;

  font-size: 20px;
  line-height: 23px;
  color: #868686;
`;

export const ButtonContainer = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 15px;
`;

export const VoidMessage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center
`

export const ExtractTotal = styled.div`
  width: 100% - 15px;
  height: 50px;

  position: absolute;
  bottom: 10px;
  left: 15px;
  right: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: Raleway;
  font-style: normal;
  line-height: 20px;
  font-size: 1em;

  p:first-child {
    font-weight: bold;
    color: #000000;
  }
  p:last-child {
    color: #03ac00;
  }
`;
