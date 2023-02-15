import "./App.css";
import { Route, Routes } from "react-router-dom";
import WithUseState from "./pages/WithUseState";
import WithUseReducer from "./pages/WithUseReducer";
import WithHookForReducer from "./pages/WithHookForReducer";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="" element={<WithUseState />} />
        <Route path="reducers" element={<WithUseReducer />} />
        <Route path="register" element={<WithHookForReducer />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
