import { useParams } from "react-router-dom";
import TransactionPage from "../../components/General/TransactionPage";

export default function NewTransaction() {
  const {type} = useParams();
  
  return <TransactionPage type={type} operation="create">{type}</TransactionPage>;
}
