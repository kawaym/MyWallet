import { SubmitButton, Input } from "../../FormComponents";
import EditTransactionContainer from "../../History/EditTransactionContainer";
import { PageTitle } from "./style";
import { VscClose } from "react-icons/vsc";

export default function TransactionPage({ type, operation }) {
  const title = type === "in" ? "entrada" : "saída";
  const op_title = operation === "update" ? "Editar" : "Nova";
  const op_button = operation === "update" ? "Atualizar" : "Salvar";

  return (
    <EditTransactionContainer>
      <PageTitle>
        {op_title} {title} <VscClose size={26}></VscClose>
      </PageTitle>
      <Input placeholder="Valor"></Input>
      <Input placeholder="Nome"></Input>
      <Input placeholder="Descrição"></Input>

      <SubmitButton>
        {op_button} {title}
      </SubmitButton>
    </EditTransactionContainer>
  );
}
