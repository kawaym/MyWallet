import { Formik } from "formik";
import {
  SubmitButton,
  Container,
  Logo,
  StyledLink,
  InputBox,
  Form,
} from "../../components/FormComponents";
import * as Yup from "yup";
import { ThreeDots } from "react-loader-spinner";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

export default function Login() {
  const { auth, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth && auth.token) {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <Logo>MyWallet</Logo>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          const promise = api.login(values);
          promise.then((response) => {
            navigate("/");
            login(response.data);
          });
          promise.catch((response) => {
            const errorCode = parseInt(response.message.slice(-3));
            if (errorCode === 401) {
              alert("Usuário Inválido");
              setSubmitting(false);
            } else {
              alert("Erro desconhecido, tente novamente mais tarde");
            }
          });
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Deve ser um e-mail válido")
            .required("Campo obrigatório"),
          password: Yup.string().required("Campo obrigatório"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <Form onSubmit={handleSubmit}>
              <InputBox
                name="email"
                placeholder="E-mail"
                value={values.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errorStatus={errors.email && touched.email}
                errorText={errors.email}
                disabled={isSubmitting}
              />
              <InputBox
                name="password"
                placeholder="Senha"
                value={values.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errorStatus={errors.password && touched.password}
                errorText={errors.password}
                disabled={isSubmitting}
              />
              <SubmitButton type="submit">
                {isSubmitting && (
                  <ThreeDots
                    type="ThreeDots"
                    color="#FFFFFF"
                    height={20.976}
                    width={100}
                  />
                )}
                {!isSubmitting && "Entrar"}
              </SubmitButton>
            </Form>
          );
        }}
      </Formik>

      <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  );
}
