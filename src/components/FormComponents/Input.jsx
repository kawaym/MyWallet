import styled from "styled-components";

const Input = styled.input`
  height: 58px;
  width: 100%;

  font-family: Raleway;
  font-size: 20px;
  line-height: 23px;

  border: none;
  border-radius: 5px;
  padding: 15px;

  color: #000000;

  &::placeholder{
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;

    color: #CACACA;
  }
  &:disabled{
    background-color: #ffffff;
  }
`
export default Input;