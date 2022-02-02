import { Container } from "../../components/FormComponents";
import TransactionButton from "../../components/History/TransactionButton";
import { ButtonContainer, TransactionsContainer, UserContainer } from "./style";
import { IoExitOutline } from "react-icons/io5";

export default function History() {
  return (
    <Container>
      <UserContainer>
        <p>Olá, Fulano</p> <IoExitOutline size={25}></IoExitOutline>
      </UserContainer>

      <TransactionsContainer>
        Não há registros de entrada ou saída
      </TransactionsContainer>

      <ButtonContainer>
        <TransactionButton type="in"></TransactionButton>
        <TransactionButton type="out"></TransactionButton>
      </ButtonContainer>
    </Container>
  );
}
