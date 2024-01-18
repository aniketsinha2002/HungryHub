import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    //Subscribing to the store using our selector - hook | CART
    const cartItems = useSelector((store) => store.cart.items);
    
    const dispatch = useDispatch();

  return (
      <div className='text-center m-4 p-4'>
          <h1 className='text-2xl font-bold'>CART</h1>
          <div>
              <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={() => {
                  //dispatch an action
                 dispatch(clearCart());
              }}>
                  Clear Cart
              </button>
              {cartItems.length===0 ? (<h1>Add items to the cart</h1>): <ItemList items={cartItems}/>}
              
          </div>
      </div>
  )
}

export default Cart;