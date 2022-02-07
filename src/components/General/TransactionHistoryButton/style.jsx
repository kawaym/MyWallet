import styled from "styled-components";

const Container = styled.button`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 19px;

  display: flex;

  width: 100%;
  padding: 10px;
`;

const DateContainer = styled.div`
  width: 15%;
  text-align: left;

  color: #c6c6c6;
`;
const NameContainer = styled.div`
  width: 100%;
  text-align: left;
  padding-left: 15px;
  color: #000000;
`;
const ValueContainer = styled.div`
  width: 25%;
  text-align: right;

  color: ${(props) => (props.type === "saida" ? "#C70000" : "#03AC00")};
`;

export { Container, DateContainer, NameContainer, ValueContainer };
