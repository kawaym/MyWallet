import { Container } from "../../components/FormComponents";
import TransactionHistoryButton from "../../components/General/TransactionHistoryButton";
import TransactionButton from "../../components/History/TransactionButton";
import {
  ButtonContainer,
  ExtractTotal,
  TransactionsContainer,
  UserContainer,
  VoidMessage,
} from "./style";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import api from "../../services/api";
import useName from "../../hooks/useName";
import { BallTriangle } from "react-loader-spinner";

export default function History() {
  const { auth, login } = useAuth();
  const { name, nameChanger } = useName();
  const [extract, setExtract] = useState(undefined);
  const navigate = useNavigate();

  function handleExit() {
    if (window.confirm("Deseja sair?")) {
      login(JSON.stringify({ token: "" }));

      navigate("/login");
    }
  }

  const [transactions, setTransactions] = useState();

  function handleTransaction(path) {
    navigate(`/nova-transacao-${path}`);
  }

  useEffect(() => {
    if (!auth || !auth.token) {
      navigate("/login");
    } else {
      api.getTransactions(auth.token).then((response) => {
        setTransactions(response.data.transactions);
        setExtract(response.data.extract);
        nameChanger(response.data.owner);
      });
    }
  }, []);

  console.log(transactions);

  if (transactions === undefined) {
    return (
      <Container>
        <UserContainer>
          <p>Olá, {name}</p>
          <button onClick={handleExit}>
            <IoExitOutline size={25} color="white"></IoExitOutline>
          </button>
        </UserContainer>

        <TransactionsContainer center="center">
          <BallTriangle color="#868686" height={80} width={80} />
        </TransactionsContainer>

        <ButtonContainer>
          <TransactionButton
            type="in"
            onClick={() => handleTransaction("entrada")}
          ></TransactionButton>
          <TransactionButton
            type="out"
            onClick={() => handleTransaction("saida")}
          ></TransactionButton>
        </ButtonContainer>
      </Container>
    );
  }
  return (
    <Container>
      <UserContainer>
        <p>Olá, {name}</p>
        <button onClick={handleExit}>
          <IoExitOutline size={25} color="white"></IoExitOutline>
        </button>
      </UserContainer>

      <TransactionsContainer>
        {transactions.lenght === 0 && (
          <VoidMessage>Não há registros de entrada ou saída</VoidMessage>
        )}
        {transactions?.map((item) => (
          <TransactionHistoryButton
            key={transactions.indexOf(item)}
            name={item.name}
            date={item.date}
            value={item.value.replace(".", ",")}
            type={item.type}
          />
        ))}
        {extract !== undefined && transactions.lenght !== 0 && (
          <ExtractTotal>
            <p>Saldo</p>
            <p>{extract.replace(".", ",")}</p>
          </ExtractTotal>
        )}
      </TransactionsContainer>

      <ButtonContainer>
        <TransactionButton
          type="in"
          onClick={() => handleTransaction("entrada")}
        ></TransactionButton>
        <TransactionButton
          type="out"
          onClick={() => handleTransaction("saida")}
        ></TransactionButton>
      </ButtonContainer>
    </Container>
  );
}
