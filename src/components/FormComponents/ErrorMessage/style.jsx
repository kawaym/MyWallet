import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 30px;

  background-color: #FFFFFF;
  border-radius: 0px 0px 5px 5px;
  opacity: 55%;

  display: ${props => props.errorStatus ? 'flex' : 'none'};
  align-items: center;
  position: relative;

  padding: 15px;
  box-shadow: 0 -5px 0 0 #ffffff;

  span {
    font-family: Raleway;
    opacity: 100%;
    color: red;
    font-weight: bold;
  }

`;

