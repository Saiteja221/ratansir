import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function FootWear(){
    const dispatch = useDispatch()

    const footwears = useSelector(state => state.product.Footwears)

    const items = footwears.map( (product, index)=>
        <li key={index}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
        </li>
    )
    return(
        <>
            <h2>Foot wears</h2>
            <ul>
                {items}
            </ul>
        </>
    )
}
export default FootWear;