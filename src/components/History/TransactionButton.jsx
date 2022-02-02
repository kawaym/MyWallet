import styled from "styled-components";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
function TransactionButton({ type }) {
  return (
    <Button>
      {type === "out" ? (
        <AiOutlineMinusCircle size={25}></AiOutlineMinusCircle>
      ) : (
        <AiOutlinePlusCircle size={25}></AiOutlinePlusCircle>
      )}
      <p>
        Nova {type === "out" ? "saída" : "entrada"}
      </p>
    </Button>
  );
}

const Button = styled.button`
  height: 114px;
  width: 156px;

  background: #a328d6;
  border-radius: 5px;

  position: relative;

  svg{
    position: absolute;
    top: 9px;
    left: 9px;

    color: #ffffff;
  }
  p{
    color: #ffffff;
    font-family: Raleway;
    font-size: 17px;
    font-style: normal;
    font-weight: bold;
    line-height: 20px;

    position: absolute;
    bottom: 9px;
    left: 9px;

    width: 10px;
  }
`;

export default TransactionButton;
