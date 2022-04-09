
import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import styles from "./Carousel.module.scss"
export const GamesCarousel = () => {
  return (
    <div>
      <Carousel className={styles.carousel}>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.zockerheim.de%2Fzockerheim%2Fwp-content%2Fuploads%2F2017%2F08%2FAge-of-Empires-IV-Logo.jpg&f=1&nofb=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Age of Empires 3</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fplanet-zoo_a2lpZ2aUmZqaraWkpJRmZ21lrWxnZQ.jpg&f=1&nofb=1"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Planet Zoo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Ffallout-76-5k_a2ppam2UmZqaraWkpJRmZ21lrWxnZQ.jpg&f=1&nofb=1"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Fallout 4</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default GamesCarousel