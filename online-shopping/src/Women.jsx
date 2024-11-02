import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function Women(){
    const dispatch = useDispatch()

    const womenProducts = useSelector(state => state.product.Womens)

    const items = womenProducts.map( (product, index)=>
        <li key={index}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
        </li>
    )
    return(
        <>
            <h2>Women Products</h2>
            <ul>
                {items}
            </ul>
        </>
    )
}
export default Women;