import { ToastContainer } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { SignInProvider } from "./contexts/signinContext";
import { AccountDetailPage, LoginPage, RegisterPage } from "./pages";

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="" element={<h1>Welcome</h1>} />
        <Route path="" element={<SignInProvider />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="account" element={<AccountDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
