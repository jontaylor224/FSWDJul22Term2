import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <Container>
      <h1>Welcome to Week 11!</h1>
      <p>
        With just two weeks left in Term 2, we're shifting our focus back to React too learn about
        options we have with regards to advanced state management.
      </p>
      <p>
        The two topics on the docket for this week are:
      </p>
      <ul>
        <li>Reducers - <Link to="/reducers">More info</Link></li>
        <li>The Context API - <Link to="/context">More info</Link></li>
      </ul>
    </Container>
  )
}

export default LandingPage