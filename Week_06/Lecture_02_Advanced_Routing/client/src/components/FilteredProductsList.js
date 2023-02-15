import style from './FilteredProductsList.module.css'
import { Row, Card, Col } from "react-bootstrap"
import { useNavigate, useParams } from 'react-router-dom'

const FilteredProductsList = ({ products }) => {
  // How do we know which products to filter?
  const { category } = useParams()
  const navigate = useNavigate()

  return (
    <>
      <h2 className="mt-5">
        Showing All Products for&nbsp;
        {
          category === "bed" ?
            "Bedroom"
            :
            `${category[0].toUpperCase()}${category.slice(1)} Rooms`
        }</h2>
      <Row>
        {
          products
            .filter((prod) => prod.category.toLowerCase().includes(category.toLowerCase()))
            .map((prod) => (
              <Card as={Col} xs={12} md={6} lg={4} key={prod.id} className={`bg-dark ${style.furnitureCard}`} onClick={() => navigate(`/product/${prod.id}`)}>
                <Card.Img src={prod.imageUrl} alt={prod.name} />
                <Card.ImgOverlay>
                  <Card.Title>{prod.name}</Card.Title>
                  <Card.Text>${prod.price.toFixed(2)}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            ))
        }
      </Row>
    </>
  )
}

export default FilteredProductsList