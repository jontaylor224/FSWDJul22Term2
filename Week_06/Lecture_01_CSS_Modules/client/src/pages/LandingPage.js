import { Col, Container, Row } from "react-bootstrap"
import style from './LandingPage.module.css'

const LandingPage = () => {
  return (
    <Container className="overflow-hidden" as="main">
      <h1>Welcome to J&A Restorations</h1>
      <img className={style.hero} src="./outdoor.avif" alt="Hero" />
      <Row>
        <Col xs={12} md={5} lg as="section" className={`${style.container} mx-2`}>
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eveniet aliquam id exercitationem cum placeat iusto illo cupiditate quos. Maxime doloribus deleniti nesciunt nihil quibusdam rem vitae, perspiciatis nisi consequuntur exercitationem? Reprehenderit placeat quae maxime quod sequi.</p>
        </Col>
        <Col xs={12} md={5} lg as="section" className={`${style.container} mx-2`}>
          <h3>Lorem ipsum dolor sit.</h3>
          <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt veritatis, quia ea laborum quas minima vel, aliquid ipsam excepturi harum rem!</p>
        </Col>
        <Col xs={12} md={5} lg as="section" className={`${style.container} mx-2`}>
          <h3>Lorem, ipsum dolor.</h3>
          <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi provident id praesentium deserunt, ipsa sunt in quas atque, vitae minima doloribus quod sint accusantium dolores, obcaecati voluptate debitis aperiam quaerat?</p>
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPage