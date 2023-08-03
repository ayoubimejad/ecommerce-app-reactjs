import { useEffect, useState } from "react"
import './BestSelling.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../rtk/slices/cartSlice";
export function BestSelling() {
    const [data, setData] = useState();
    const dispatch =useDispatch();

    useEffect(() => {
        fetch("https://itproducts.onrender.com/products").then((res) => res.json()).then((res) => setData(res))
    }, [])
   // console.log(data)
    return (
        <div className="bestselling">
            <h1>Best Selling Products</h1>
            <div className="container">
                {data &&
                    data
                        .filter((product) => product.id % 4 === 0 && product.id > 17)
                        .map((data) => {
                            return <div className="card" key={data.id} >
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
                        })}
            </div>
        </div>
    )
}