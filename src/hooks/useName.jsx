import { useContext } from "react";
import NameContext from "../contexts/NameContext";

export default function useName(){
  return useContext(NameContext);
}