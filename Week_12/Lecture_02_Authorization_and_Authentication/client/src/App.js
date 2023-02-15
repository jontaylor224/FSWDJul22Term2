import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { SignUpPage } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
