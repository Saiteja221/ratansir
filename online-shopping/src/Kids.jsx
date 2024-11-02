import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function Kids(){
    const dispatch = useDispatch()

    const kidsProducts1 = useSelector(state => state.product.kids)

    const items = kidsProducts1.map( (product, index)=>
        <li key={index}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={()=>dispatch(addToCart(product))} >Add to cart</button>
        </li>
    )
    return(
        <>
            <h2>Kids Products</h2>
            <ul>
                {items}
            </ul>
        </>
    )
}
export default Kids;