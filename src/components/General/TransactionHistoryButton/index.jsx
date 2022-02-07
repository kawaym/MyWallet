import { Container, DateContainer, NameContainer, ValueContainer } from "./style";

export default function TransactionHistoryButton({date, name, value, type}){
  return(
    <Container type="button">
      <DateContainer>{date}</DateContainer>
      <NameContainer>{name}</NameContainer>
      <ValueContainer type={type}>{value}</ValueContainer>
    </Container>
  )
}