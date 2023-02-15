import style from './ShopPage.module.css'
import { useState } from "react"
import { Col, Row, Container } from "react-bootstrap"
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom'

const ShopPage = ({ products }) => {
  // TODO: Render the filtered products based on the category
  const navigate = useNavigate()
  const params = useParams()

  let featuredProductIndex = params.category ? null : (Math.floor(Math.random() * products.length))


  const selectCategory = (category) => {
    navigate(`/shop/${category}`)
  }

  return (
    <Container>
      <Row>
        <Col as="h3" xs={12}>
          Select a Furniture Type
        </Col>
        <Col className={style.categoryLink}>
          <img
            src="./bedroom.png"
            className={style.categoryThumbnail}
            alt="Bedroom"
            onClick={(e) => selectCategory("bed")} />
          <Link className={style.link} to="/shop/bedroom">Bedroom</Link>
        </Col>
        <Col className={style.categoryLink}>
          <img
            src="./living.png"
            className={style.categoryThumbnail}
            alt="Living Room"
            onClick={(e) => selectCategory("living")} />
          <Link className={style.link} to="/shop/living">Living Room</Link>
        </Col>
        <Col className={style.categoryLink}>
          <img
            src="./dining.png"
            className={style.categoryThumbnail}
            alt="Dining Room"
            onClick={(e) => selectCategory("dining")} />
          <Link className={style.link} to="/shop/dining">Dining Room</Link>
        </Col>
      </Row>
      {
        params.category ?
          <Outlet />
          :
          <>
            <h2>Featured Product</h2>
            <h3>{products[featuredProductIndex].name}</h3>
            <img src={products[featuredProductIndex].imageUrl} alt={products[featuredProductIndex].name} />

          </>
      }

    </Container>
  )
}

export default ShopPage