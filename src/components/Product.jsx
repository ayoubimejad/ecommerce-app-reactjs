import { useEffect, useState } from 'react'
import './Product.css'
import { Card } from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slices/productsSlice';
export function Product() {

    const dispatch =useDispatch();
    const data = useSelector(state => state.products)
    const [category, setCategory] = useState();
    useEffect(() => {
        setCategory(data)
    },[data])
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    const filterData = (categ) => {
        const categoryData = data.filter((product) => {
            return product.category === categ;
        });
        setCategory(categoryData)
    }
    //console.log(category);
    return (
        <div className="product">
            <h1>All Products</h1>
            <div className="container">
                <div className="butns">
                    <span onClick={() => setCategory(data)} >All Categories</span>
                    <span onClick={(e) => filterData(e.target.textContent.toLowerCase())}>Smartphone</span>
                    <span onClick={(e) => filterData(e.target.textContent.toLowerCase())}>Laptop</span>
                    <span onClick={(e) => filterData(e.target.textContent.toLowerCase())}>Smartwatch</span>
                    <span onClick={(e) => filterData(e.target.textContent.toLowerCase())}>Earbuds</span>
                    <span onClick={(e) => filterData(e.target.textContent)}>Keyboard</span>
                    <span onClick={(e) => filterData(e.target.textContent.toLowerCase())}>Graphics Card</span>
                </div>
                <div className="cards">
                    {category && category.map((data) => {
                        return (
                            <Card key={data.id} data={data} showButton={true}/>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}