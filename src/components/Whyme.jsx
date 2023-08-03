import './Whyme.css'
import {
    FaGlobe,
    FaCertificate,
    FaPercentage,
    FaShieldAlt,
  } from "react-icons/fa"; 
export function Whyme() {
    return (
        <section className="us">
            <div className="container">
                <h2 >Why Choose Us</h2>
                <div className="grid">
                    <div className="text-center">
                        <div className="flex justify-center">
                            <FaGlobe className="text-7xl text-gray-700" />
                        </div>
                        <h1 className="text-2xl text-gray-900 font-semibold">
                            Worldwide Shipping
                        </h1>
                        <p className="text-gray-700 text-lg">
                            We offer worldwide shipping to make our products accessible to
                            customers all over the world.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center">
                            <FaCertificate className="text-7xl text-gray-700" />
                        </div>
                        <h1 className="text-2xl font-semibold">Best Quality</h1>
                        <p className="text-gray-700 text-lg">
                            We believe in providing our customers with only the best quality
                            products.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center">
                            <FaPercentage className="text-7xl text-gray-700" />
                        </div>
                        <h1 className="text-2xl font-semibold">Best Offers</h1>
                        <p className="text-gray-700 text-lg">
                            We pride ourselves on offering the best deals and discounts to our
                            customers.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center">
                            <FaShieldAlt className="text-7xl text-gray-700" />
                        </div>
                        <h1 className="text-2xl font-semibold">Secure Payments</h1>
                        <p className="text-gray-700 text-lg">
                            We offer a range of secure payment options to ensure that your
                            transactions are safe and secure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}