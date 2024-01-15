import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import heroImage from '../assets/hero-img.jpg'

export default function Home() {

    let int = 1000000

    return (
        <>
        {/* Hero */}
            <section className="hero">
                <div className="hero-text">
                    <h1>TRAILSTRIDER</h1>
                    <h3>Your Hiking Trail Guide</h3>
                    <Link to="/trails"><i>Trails</i></Link>
                </div>
            </section>

        {/* Carousel */}
            <Carousel className="carousel" data-bs-theme="dark">
                <Carousel.Item className="carousel-item" interval={int}>
                    <img className="carousel-image" src={heroImage} alt="first slide" />
                    <Carousel.Caption>
                        <h3>Trail 1</h3>
                        <p>A lovely trail from place to another place</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={int}>
                    <img className="carousel-image" src={heroImage} alt="first slide" />
                    <Carousel.Caption>
                        <h3>Trail 2</h3>
                        <p>A lovely trail from place to another place</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={int}>
                    <img className="carousel-image" src={heroImage} alt="first slide" />
                    <Carousel.Caption>
                        <h3>Trail 3</h3>
                        <p>A lovely trail from place to another place</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}