import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useUI } from "../contexts/UIContext";

const PreferencesPage = () => {
  const { theme, toggleTheme, clearPrefs } = useUI();
  return (
    <Container>
      <h1>Preferences</h1>
      <Row>
        <Col as="h3" xs={12} className="text-end">
          Theme
        </Col>
        <Col xs={12} className="d-flex gap-1 justify-content-end">
          Light
          <Form.Check
            type="switch"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          Dark
        </Col>
      </Row>
      <Button variant="danger" onClick={clearPrefs}>
        Delete My Preferences
      </Button>
    </Container>
  );
};

export default PreferencesPage;
