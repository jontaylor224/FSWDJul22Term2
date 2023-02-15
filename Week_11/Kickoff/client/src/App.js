import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ContextDescription, Header, SetClouds } from "./components";
import { uiContext } from "./contexts/UIProvider";
import { ContextPage, LandingPage, ReducersPage } from "./pages";

function App() {
  const { theme } = useContext(uiContext);
  return (
    <div className={`themeContainer ${theme}`}>
      <Header />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="reducers" element={<ReducersPage />} />
        <Route path="context" element={<ContextPage />}>
          <Route path="" element={<ContextDescription />} />
          <Route path="setclouds" element={<SetClouds />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
