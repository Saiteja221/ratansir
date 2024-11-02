import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";


function Electronics(){
    const dispatch = useDispatch()

    const electronics = useSelector(state => state.product.electronics)

    const items = electronics.map( (product, index)=>
        <li key={index}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
        </li>
    )
    return(
        <>
            <h2>Electronics</h2>
            <ul>
                {items}
            </ul>
        </>
    )
}
export default Electronics;