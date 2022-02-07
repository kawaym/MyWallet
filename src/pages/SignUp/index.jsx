import {
  SubmitButton,
  Container,
  InputBox,
  StyledLink,
  Logo,
  Form,
} from "../../components/FormComponents";
import { Formik } from "formik";
import { ThreeDots } from "react-loader-spinner";
import * as Yup from "yup";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo>MyWallet</Logo>

      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          confirmPassword: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          const promise = api.signUp(values);
          promise.then((response) => {
            navigate("/login");
          });
          promise.catch((response) => {
            console.log(JSON.stringify(response, null, 2));

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
          name: Yup.string().required("Campo obrigatório"),
          email: Yup.string()
            .email("Deve ser um e-mail válido")
            .required("Campo obrigatório"),
          password: Yup.string().required("Campo obrigatório"),
          confirmPassword: Yup.string()
            .required("Campo obrigatório")
            .oneOf([Yup.ref("password"), null], "Senhas não são iguais"),
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
                name="name"
                placeholder="Nome"
                value={values.name}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errorStatus={errors.name && touched.name}
                errorText={errors.name}
                disabled={isSubmitting}
              />
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
              <InputBox
                name="confirmPassword"
                placeholder="Confirme a senha"
                value={values.confirmPassword}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errorStatus={errors.confirmPassword && touched.confirmPassword}
                errorText={errors.confirmPassword}
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
                {!isSubmitting && "Cadastrar"}
              </SubmitButton>
            </Form>
          );
        }}
      </Formik>

      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  );
}
