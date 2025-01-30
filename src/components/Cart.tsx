import { useCart } from '../AppContext'

const Cart = () => {
  const {cart} = useCart()
  return (
    <div className='w-full h-full bg-white p-4 rounded-2xl'>
        <h5 className='text-3xl font-bold mb-8 text-(--color-red) '>Your Cart ({cart.items.length})</h5>
        {cart.items.map((item)=> (
          <p>{item.name} <span>{item.quantity}</span></p>
        ))}
        <h3>Total: ${cart.total.toFixed(2)}</h3>
    </div>
  )
}

export default Cart