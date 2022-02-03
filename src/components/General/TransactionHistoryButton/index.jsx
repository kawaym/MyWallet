import { Container, DateContainer, NameContainer, ValueContainer } from "./style";

export default function TransactionHistoryButton(){
  return(
    <Container type="button">
      <DateContainer>24/11</DateContainer>
      <NameContainer>Teste</NameContainer>
      <ValueContainer type="in">50,00</ValueContainer>
    </Container>
  )
}