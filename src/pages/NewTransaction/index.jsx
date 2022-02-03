import TransactionPage from "../../components/General/TransactionPage";

export default function NewTransaction({type}) {
  return <TransactionPage type={type} operation="create"></TransactionPage>;
}
