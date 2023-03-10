import { useHistory, useRouteMatch } from "react-router-dom"

function CartItemListing({cartItem}){
        console.log(cartItem)
    const history = useHistory()
    const {url} = useRouteMatch()
    const cartItemClick = () => history.push(`${url}/cart_items/${cartItem.id}`)
    return (
        <div onClick={cartItemClick} >
            <h4>{cartItem.product.available?null:"(Unavailable!)"}
            {cartItem.product.name}  Quantity# {cartItem.quantity} : ${parseFloat(cartItem.quantity * cartItem.product.price).toFixed(2)}</h4>   
        </div>
    )
}

export default CartItemListing