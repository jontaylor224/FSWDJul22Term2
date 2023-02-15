import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  theme: "light",
  fontSize: "normal",
  hasVisited: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  const newState = { ...state };

  let newTheme;

  switch (type) {
    case "TOGGLE_THEME":
      newTheme = state.theme === "light" ? "dark" : "light";
      newState.theme = newTheme;
      newState.hasVisited = true;
      return newState;
    case "ACTIVATE_DARK_MODE":
      newState.hasVisited = true;
      newState.theme = "dark";
      return newState;
    case "ACTIVATE_LIGHT_MODE":
      newState.hasVisited = true;
      newState.theme = "light";
      return newState;
    case "CHANGE_FONT_SIZE":
      newState.hasVisited = true;
      newState.fontSize = payload;
      return newState;
    case "PREFS_INIT":
      payload.hasVisited = true;
      return payload;
    case "RESET_UI":
      return initialState;
    case "LOG_VISIT":
      newState.hasVisited = true;
      return newState;
    default:
      return state;
  }
};

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [ui, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const activateDarkMode = () => {
    dispatch({ type: "ACTIVATE_DARK_MODE" });
  };

  const activateLightMode = () => {
    dispatch({ type: "ACTIVATE_LIGHT_MODE" });
  };

  const initializeUIFromSaved = () => {
    const savedState = JSON.parse(localStorage.getItem("UIPrefs"));

    if (savedState) {
      dispatch({ type: "PREFS_INIT", payload: savedState });
    }
  };

  const logVisit = () => {
    if (!ui.hasVisited) {
      dispatch({ type: "LOG_VISIT" });
    }
  };

  const clearPrefs = () => {
    // localStorage.removeItem("UIPrefs"); // This will only delete the one key value pair based on the key you provide
    localStorage.clear(); // This will delete ALL localStorage entries for this app
    dispatch({ type: "RESET_UI" });
  };

  useEffect(() => {
    console.log("how often");
    localStorage.setItem("UIPrefs", JSON.stringify(ui)); // Setting in local storage, you MUST convert the value to a string if it is not already
  }, [ui]);

  return (
    <UIContext.Provider
      value={{
        ...ui,
        toggleTheme,
        activateDarkMode,
        activateLightMode,
        initializeUIFromSaved,
        logVisit,
        clearPrefs,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const ui = useContext(UIContext);
  return {
    ...ui,
  };
};
