import { ErrorMessage, Input } from "..";
import { Container } from "./style";

export default function InputBox({ name, value, handleChange, handleBlur, error, disabled, placeholder, errorStatus, errorText }){
  return(
    <Container>
      <Input placeholder={placeholder}
        name={name}
        type={name==="confirmPassword" ? 'password' : name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error}
        disabled={disabled}
      ></Input>
      <ErrorMessage errorStatus={errorStatus} errorText={errorText}></ErrorMessage>
    </Container>
  )
}