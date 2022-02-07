import { Container } from "./style";

export default function ErrorMessage({ errorStatus, errorText }){
  return (
    <Container errorStatus={errorStatus}>
      <span>{errorText}</span>
    </Container>
  )
}