import { Link } from 'react-router-dom';
import './Card.css'
import { useDispatch } from 'react-redux';
import { addCart } from '../rtk/slices/cartSlice';
export function Card(Props) {
    const dispatch= useDispatch()
    const {showButton}=Props;
    return (
        <div className="card"  >
            <div className="image">
                <img src={Props.data.img} alt="" />
            </div>
            <h3>{Props.data.title.slice(0,20)} </h3>
            <h4>Brand: <span>{Props.data.brand}</span>  </h4>
            <p>Price: <span>{Props.data.price}</span> </p>
            <div className="buttons">
                {showButton  && <Link to={`/product/${Props.data.id}`} >More Info</Link>}
                <Link onClick={() => dispatch(addCart(Props.data))}>add to cart</Link>
            </div>
        </div>
    )
}