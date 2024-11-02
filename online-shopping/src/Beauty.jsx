import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
function Beauty(){
    const dispatch = useDispatch()

    const beautyProducts = useSelector(state => state.product.beauty)

    const items = beautyProducts.map( (product, index)=>
        <li key={index}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
        </li>
    )
    return(
        <>
            <h2>Beauty Products</h2>
            <ul>
                {items}
            </ul>
        </>
    )
}
export default Beauty;