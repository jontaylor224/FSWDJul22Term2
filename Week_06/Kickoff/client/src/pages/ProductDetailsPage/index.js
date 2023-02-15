import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import products from '../../data';

const ProductDetailsPage = () => {
  const [product, setProduct] = useState()
  const { productId } = useParams();


  useEffect(() => {
    setProduct(products.find(prod => prod.id === productId))
  }, [productId])



  return (
    <Container fluid>
      {
        product ?
          <>
            <h1>{product.name} - ${product.price.toFixed(2)}</h1>
            <p>{product.quantity > 0 ? `In Stock: ${product.quantity}` : "OUT OF STOCK"}</p>
          </>
          :
          <p>Loading products...</p>
      }
    </Container>
  )
}

export default ProductDetailsPage