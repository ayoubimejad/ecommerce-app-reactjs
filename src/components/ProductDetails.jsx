import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import './ProductDetails.css'
import { useDispatch } from "react-redux";
import { addCart } from "../rtk/slices/cartSlice";
//`
export function ProductDetails() {
    const id = useParams();
    const [data, setData] = useState()
    //console.log(id)
    const dispatch =useDispatch();

    useEffect(() => {
        fetch(`https://itproducts.onrender.com/products/${id.productId}`).then((res) => res.json()).then((res) => setData(res))
    }, [])
    return (
        <div className="details">
            {data &&
                <div className="container">
                    <div className="image">
                        <img src={data.img} alt="" />
                    </div>
                    <div className="content">
                        <h2>{data.title} </h2>
                        <p className="price">Price: <span>{data.price}</span> </p>
                        <h4>Brand: <span>{data.brand}</span>  </h4>
                        <p className="key">Key Features</p>
                        <p className="descr">{data.description} </p>
                        <div className="rate">
                            <span className="one">Category: {data.category} </span>
                            <span className="two">Rating: <span>{data.rating} </span></span>
                        </div>
                        <Link onClick={() => dispatch(addCart(data))}>add to cart</Link>
                    </div>
                </div>
            }
        </div>
    )
}