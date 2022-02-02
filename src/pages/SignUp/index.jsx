import { Button, Container, Input, StyledLink, Logo } from "../../components/FormComponents";

export default function SignUp(){
  return(
      <Container>
        <Logo>MyWallet</Logo>

        <Input placeholder="Nome"></Input>
        <Input placeholder="E-mail"></Input>
        <Input placeholder="Senha"></Input>
        <Input placeholder="Confirme a senha"></Input>
        
        <Button>Cadastrar</Button>
        
        <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
      </Container>
  )
}