import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
export function Navbar() {
    const productLength= useSelector((state) => state.cart.length)

    useEffect(() => {
        document.querySelectorAll("ul li a").forEach((a) => {
            a.addEventListener('click', () => {
                document.querySelectorAll("ul li a").forEach((a) => a.classList.remove('active'))
                a.classList.add('active')
            })
        })
    });
    return (
        <div className="navebar sticky-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Its</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><FontAwesomeIcon icon={faBars} /></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to={'/'}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/about'}>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/product'}>Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/cart'}>Cart-{productLength} </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link "><FontAwesomeIcon icon={faCartShopping} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    )
}