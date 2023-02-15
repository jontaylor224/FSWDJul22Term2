import React, { useEffect, useState } from 'react'
import style from './ProductPage.module.css';
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ProductPage = ({ products }) => {
  const [product, setProduct] = useState()
  const { id } = useParams()
  const navigate = useNavigate()


  useEffect(() => {
    let productToDisplay = products.find((prod) => prod.id === Number(id))

    if (!productToDisplay) {
      navigate("/shop")
    }

    setProduct(productToDisplay)
  }, [id])

  if (!product) {
    return (
      <Container>
        <h1>Loading...</h1>
      </Container>
    )
  }

  return (

    <Container>
      <Row>
        <Col xs={12} md={6} lg={8}>
          <h1>{product.name}</h1>
          <img className="w-100" src={product.imageUrl} alt={product.name} />
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Furniture For: {product.category} </p>
        </Col>
        <Col className="d-flex flex-column" as={Row} xs={12} md={6} lg={4}>
          <h2>You might also be interested in:</h2>
          {
            products
              .filter((prod) => prod.category === product.category && prod.id !== product.id)
              .map((prod) => (
                <div key={prod.id}>
                  <h4><Link className={style.link} to={`/product/${prod.id}`}>{prod.name} - ${prod.price.toFixed(2)}</Link></h4>
                  <img className="w-100" src={prod.imageUrl} alt={prod.name} />
                </div>
              ))
          }
        </Col>
      </Row>
    </Container>
  )
}

export default ProductPage