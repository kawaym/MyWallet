import TransactionPage from "../../components/General/TransactionPage";

export default function EditTransaction({ type }) {
  return <TransactionPage type={type} operation={"update"}></TransactionPage>;
}
