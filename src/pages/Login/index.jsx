import { Button, Container, Input, Logo, StyledLink } from "../../components/FormComponents";

export default function Login(){
  return(
      <Container>
        <Logo>MyWallet</Logo>
        
        <Input placeholder="E-mail"></Input>
        <Input placeholder="Senha"></Input>
        
        <Button>Entrar</Button>

        <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
      </Container>
  )
}