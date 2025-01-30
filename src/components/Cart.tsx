import { useCart } from '../AppContext'
import empyLogo from "../assets/images/illustration-empty-cart.svg"
const Cart = () => {
  const { cart } = useCart()
  return (
    <div className='w-full h-full bg-white p-4 rounded-2xl'>
      <h5 className='text-3xl font-bold mb-8 text-(--color-red) '>Your Cart ({cart.items.length})</h5>
      {cart.items.length === 0 ?
        (
          <div>
            <img src={empyLogo} alt="" />
            <p>Your added items will appear here</p>
          </div>
        ) :
        cart.items.map((item) => (
          <div key={item.id}>
            <div>
              <p>{item.name}</p>
              <p><span>{item.quantity}x</span> <span>@ ${item.price}</span> <span>${item.total}</span></p>
              <button>X</button>
            </div>
            <h3>Total: ${cart.total.toFixed(2)}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default Cart