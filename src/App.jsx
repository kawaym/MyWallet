import ResetStyle from "./styles/reset";
import {
  Login,
  SignUp,
  History,
  NewTransaction,
  EditTransaction,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthProvider } from "./contexts/AuthContext";
import { NameProvider } from "./contexts/NameContext";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Saira+Stencil+One&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ResetStyle />
      <NameProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/cadastro" element={<SignUp />}></Route>
              <Route path="/" element={<History />}></Route>
              <Route
                path="/nova-transacao-:type"
                element={<NewTransaction />}
              ></Route>
              <Route
                path="/editar-transacao"
                element={<EditTransaction type="out" />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </NameProvider>
    </>
  );
}
