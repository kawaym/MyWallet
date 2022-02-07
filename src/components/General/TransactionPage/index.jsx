import { SubmitButton, Input, Form, InputBox } from "../../FormComponents";
import EditTransactionContainer from "../../History/EditTransactionContainer";
import { PageTitle } from "./style";
import { VscClose } from "react-icons/vsc";
import { Formik } from "formik";
import { ThreeDots } from "react-loader-spinner";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import useAuth from "../../../hooks/useAuth";

export default function TransactionPage({ type, operation }) {
  const title = type === "entrada" ? "entrada" : "saida";
  const op_title = operation === "update" ? "Editar" : "Nova";
  const op_button = operation === "update" ? "Atualizar" : "Salvar";

  const navigate = useNavigate();

  const { auth } = useAuth();

  return (
    <EditTransactionContainer>
      <PageTitle>
        {op_title} {title}{" "}
        <VscClose size={26} onClick={() => navigate("/")}></VscClose>
      </PageTitle>

      <Formik
        initialValues={{ name: "", description: "", value: "" }}
        onSubmit={(values) => {
          const promise = api.createTransaction(
            auth.token,
            values.value,
            values.name,
            values.description,
            type
          );
          promise.then((response) => {
            console.log(response);
            navigate("/");
          });
          promise.catch((response) => {
            console.log(JSON.stringify(response, null, 2));

            const errorCode = parseInt(response.message.slice(-3));
            if (errorCode === 401) {
              alert("Usuário Inválido");
            } else {
              alert("Erro desconhecido, tente novamente mais tarde");
            }
          });
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(16).required("Campo obrigatório"),
          description: Yup.string().max(250),
          value: Yup.number().required("Campo obrigatório"),
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
                placeholder="Título da Transação"
                value={values.name}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errorStatus={errors.name && touched.name}
                errorText={errors.name}
                disabled={isSubmitting}
              />
              <InputBox
                name="description"
                placeholder="Descrição da Transação"
                value={values.description}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errorStatus={errors.description && touched.description}
                errorText={errors.description}
                disabled={isSubmitting}
              />
              <InputBox
                name="value"
                placeholder="Valor da Transação"
                value={values.value}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errorStatus={errors.value && touched.value}
                errorText={errors.value}
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
                {!isSubmitting && op_button + " " + title}
              </SubmitButton>
            </Form>
          );
        }}
      </Formik>
    </EditTransactionContainer>
  );
}
