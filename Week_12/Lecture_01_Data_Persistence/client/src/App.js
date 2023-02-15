import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { useUI } from "./contexts/UIContext";
import { LandingPage, PreferencesPage } from "./pages";

function App() {
  const { theme, initializeUIFromSaved } = useUI();

  useEffect(() => {
    initializeUIFromSaved();
    localStorage.setItem("justanexample", "This is just to prove something");
  }, []);

  return (
    <div className={`App theme-${theme}`}>
      <Header />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="preferences" element={<PreferencesPage />} />
      </Routes>
      {/* <UIAlert /> */}
    </div>
  );
}

export default App;
