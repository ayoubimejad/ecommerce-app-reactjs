import './About.css'
import image from '../assets/about-2.avif'
export function About() {
    return (
        <div className="about">
          <section className='image'>
            <h1>About Us</h1>
          </section>
          <section className='content'>
            <div className="container ">
                <div className="text">
                    <h1>Who we are?</h1>
                    <p>We are a team of passionate individuals committed to providing high-quality products and exceptional customer service. Our mission is to make technology accessible to everyone, no matter where they are in the world. Shop with us and experience the difference of working with a dedicated and customer-centric team.</p>
                </div>
                <div className="image">
                    <img src={image} alt="" />
                </div>
            </div>
          </section>
        </div>
    )
}