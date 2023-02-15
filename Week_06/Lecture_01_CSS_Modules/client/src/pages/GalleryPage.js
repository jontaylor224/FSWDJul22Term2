import { Carousel, Container } from "react-bootstrap"
import galleryImages from "../galleryImages"
import style from './GalleryPage.module.css'

const GalleryPage = () => {
  return (
    <Container>
      <h2>Gallery</h2>
      <Carousel fade>
        {galleryImages.map((photo, i) => (
          <Carousel.Item key={`carousel_image_${i}`} interval={5000}>
            <img
              className={style.corouselImage}
              src={photo}
              alt={`Carousel #${i + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default GalleryPage