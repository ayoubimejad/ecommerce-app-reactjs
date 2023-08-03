import image1 from '../assets/pjimage-1.webp'
import image2 from '../assets/slide--1.avif'
import image3 from '../assets/slide-4.avif'
import image4 from '../assets/slide-5.avif'
import './Slider.css'
export function Slider() {
    return (
        <div className="slider">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100 h-hei" alt="..." />
                        <div className="content">
                            <h1>Stay Connected on the Go</h1>
                            <p>Keep up with the latest trends and stay connected on-the-go with our selection of smartphones. Choose from top brands and affordable options, with advanced features to enhance your mobile experience.</p>
                            <button>shop now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100 h-hei" alt="..." />
                        <div className="content">
                            <h1>Stay Connected on the Go</h1>
                            <p>Keep up with the latest trends and stay connected on-the-go with our selection of smartphones. Choose from top brands and affordable options, with advanced features to enhance your mobile experience.</p>
                            <button>shop now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100 h-hei" alt="..." />
                        <div className="content">
                            <h1>Stay Connected on the Go</h1>
                            <p>Keep up with the latest trends and stay connected on-the-go with our selection of smartphones. Choose from top brands and affordable options, with advanced features to enhance your mobile experience.</p>
                            <button>shop now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image4} className="d-block w-100 h-hei" alt="..." />
                        <div className="content">
                            <h1>Stay Connected on the Go</h1>
                            <p>Keep up with the latest trends and stay connected on-the-go with our selection of smartphones. Choose from top brands and affordable options, with advanced features to enhance your mobile experience.</p>
                            <button>shop now</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}