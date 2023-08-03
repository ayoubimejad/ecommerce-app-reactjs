import { useEffect, useState } from "react"
import './Features.css'
import { Link } from "react-router-dom";
import { addCart } from "../rtk/slices/cartSlice";
import { useDispatch } from "react-redux";
export function Features() {
    let url = "https://itproducts.onrender.com/products";
    const [data, setData] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(url).then((res) => res.json()).then((res) => setData(res))
    }, [])
    //console.log(data);
    return (
        <div className="features">
            <h1>Feature Products</h1>
            <div className="container">
                {data && data.map((data) => {
                    if (data.title.length <= 20) {
                        return (
                            <div className="card" key={data.id} >
                                <div className="image">
                                    <img src={data.img} alt="" />
                                </div>
                                <h3>{data.title} </h3>
                                <h4>Brand: <span>{data.brand}</span>  </h4>
                                <p>Price: <span>{data.price}</span> </p>
                                <div className="buttons">
                                    <Link to={`/product/${data.id}`}>More Info</Link>
                                    <button onClick={() => dispatch(addCart(data))}>add to cart</button>
                                </div>
                            </div>
                        )
                    }
                })
                }
            </div>
        </div>
    )
}