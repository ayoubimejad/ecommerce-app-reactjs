import { useSelector, useDispatch } from 'react-redux'
import { removeCart } from './rtk/slices/cartSlice'

export function Cart() {

  const data = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  //console.log(data)

  return (
    <div className='container' style={{ paddingTop: "80px" }}>
      <table className="table table-striped table-bordered" >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">img</th>
            <th scope="col">price</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => {
            return (
              <tr key={crypto.randomUUID()}>
                <th scope="col">{product.id} </th>
                <th scope="col">{product.title} </th>
                <th scope="col"><img src={product.img} alt="" style={{ height: "100px" }} /> </th>
                <th scope="col">{product.price} </th>
                <th scope="col"><button type="button" className="btn btn-danger" onClick={() => dispatch(removeCart(product.id))}>Danger</button></th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}