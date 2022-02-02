import { SubmitButton, Container, Input, Logo, StyledLink } from "../../components/FormComponents";

export default function Login(){
  return(
      <Container>
        <Logo>MyWallet</Logo>
        
        <Input placeholder="E-mail"></Input>
        <Input placeholder="Senha"></Input>
        
        <SubmitButton>Entrar</SubmitButton>

        <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
      </Container>
  )
}