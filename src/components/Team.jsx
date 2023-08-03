import './Team.css'
import image1 from '../assets/team1-free-img (1).png'
import image2 from '../assets/team2-free-img.png'
import image3 from '../assets/team3-free-img.png'
import image4 from '../assets/team4free-img.png'
import image5 from '../assets/team5-free-img.png'
import image6 from '../assets/team6-free-img.png'
export function Team() {
    return (
        <div className="team">
            <div className="main-title">
                <h1>Our Team</h1>
                <p>We are comprised of experienced with passion for technology and commitment to customer satisfaction.</p>
            </div>
            <div className="container">
                <div className="card">
                    <div className="image">
                        <img src={image1} alt="" />
                    </div>
                    <h3>Harvey Spector</h3>
                    <p>Founder - CEO</p>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={image2} alt="" />
                    </div>
                    <h3>Jessica Pearson</h3>
                    <p>COO</p>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={image3} alt="" />
                    </div>
                    <h3>Rachel Zain</h3>
                    <p>Marketing Head</p>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={image4} alt="" />
                    </div>
                    <h3>Luise Litt</h3>
                    <p>Lead Developer</p>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={image5} alt="" />
                    </div>
                    <h3>Katrina Bennett</h3>
                    <p>Intern Designer</p>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={image6} alt="" />
                    </div>
                    <h3>Mike Ross</h3>
                    <p>Intern Designer</p>
                </div>
            </div>
        </div>
    )
}