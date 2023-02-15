import "./UIAlert.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useUI } from "../../contexts/UIContext";

const UIAlert = () => {
  const { hasVisited, activateDarkMode, logVisit } = useUI();

  useEffect(() => {
    const savedPrefs = localStorage.getItem("UIPrefs");
    if (savedPrefs) {
      logVisit();
    }
  }, []);

  if (hasVisited) {
    return <></>;
  }

  return (
    <div className="ui-alert">
      <h3>Not a fan of bright themes?</h3>
      <p>
        You can change the theme of this site! Click the "Activate" button
        below, or select Preferences from the Options on the top right of the
        screen
      </p>
      <Button variant="info" onClick={activateDarkMode}>
        Activate
      </Button>
      <Button variant="primary" onClick={logVisit}>
        Got it, Thanks
      </Button>
    </div>
  );
};

export default UIAlert;
