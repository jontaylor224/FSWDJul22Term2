import { useContext, useReducer } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "react-rain-animation/lib/style.css";
import { uiContext } from "../contexts/UIProvider";

const initialState = {
  count: 0,
  count2: 0,
  name: "",
  isRaining: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  const newState = { ...state };
  switch (type) {
    case "INCREMENT_COUNT":
      newState.count += 1;
      return newState;
    case "DECREMENT_COUNT":
      newState.count -= 1;
      return newState;
    case "INCREMENT_COUNT_BY_PAYLOAD":
      newState.count2 += payload;
      return newState;
    case "DECREMENT_COUNT_BY_PAYLOAD":
      newState.count2 -= payload;
      return newState;
    case "CHANGE_NAME":
      newState.name = payload;
      return newState;
    case "TOGGLE_RAIN":
      newState.isRaining = !newState.isRaining;
      return newState;
    default:
      return newState;
  }
};

const ReducersPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isCloudy } = useContext(uiContext);

  return (
    <Container>
      {isCloudy && (
        <img className="overlay da-clouds" src="./cloud.gif" alt="clouds" />
      )}
      {state.isRaining && (
        <img className="overlay" src="./rain.gif" alt="raaaaain" />
      )}
      <h1>Reducers</h1>
      <p>
        Up until now, the function for modifying state (the{" "}
        <code>useState</code> hook's <code>setState</code> function), has been
        very... plain. The <code>setState</code> function essentially just takes
        the new state value as an argument, and sets it as the new value in
        state.
      </p>
      <p>
        A <code>reducer</code> is a method of managing state that is built
        around the possible ways in which you can modify state, and is
        implemented via the <code>useReducer</code> hook.
      </p>
      <p>Below are some examples of reducers in action.</p>
      <Row>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column align-items-center mb-3"
        >
          <h4>Dispatching On Click</h4>
          <div className="d-flex gap-2 align-items-center">
            <Button
              variant="info"
              onClick={() => dispatch({ type: "DECREMENT_COUNT" })}
            >
              -
            </Button>
            <span>Count: {state.count}</span>
            <Button
              variant="info"
              onClick={() => dispatch({ type: "INCREMENT_COUNT" })}
            >
              +
            </Button>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column align-items-center mb-3"
        >
          <h4>
            Hello{state.name ? "," : ""} {state.name}
          </h4>
          <div className="d-flex gap-2 align-items-center">
            <span>What's Your Name?</span>
            <input
              type="text"
              autoComplete="off"
              name="name"
              value={state.value}
              onChange={(e) =>
                dispatch({ type: "CHANGE_NAME", payload: e.target.value })
              }
            />
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column align-items-center mb-3"
        >
          <h4 className="text-center">Increment/Decrement By 5 On Click</h4>
          <div className="d-flex gap-2 align-items-center">
            <Button
              variant="info"
              onClick={() =>
                dispatch({ type: "DECREMENT_COUNT_BY_PAYLOAD", payload: 5 })
              }
            >
              -
            </Button>
            <span>Count: {state.count2}</span>
            <Button
              variant="info"
              onClick={() =>
                dispatch({ type: "INCREMENT_COUNT_BY_PAYLOAD", payload: 5 })
              }
            >
              +
            </Button>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column align-items-center mb-3"
        >
          <h4 className="text-center">
            {state.isRaining ? "Stop The Rain" : "Make It Rain"}
          </h4>
          <Form.Check
            type="checkbox"
            label="Toggle Rain"
            checked={state.isRaining}
            onChange={() => dispatch({ type: "TOGGLE_RAIN" })}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ReducersPage;
