import { useCart } from '../AppContext'


const Cart = ({setConfirm}:{setConfirm:(confirm:boolean)=> void}) => {
  const { cart, removeItem } = useCart()
  const totalItems = cart.items.reduce((acc: number, item: { quantity: number }) => acc + item.quantity, 0)
  return (
    <div className='w-full h-full bg-white p-4 rounded-2xl mt-8 mr-8'>
      <h5 className='text-3xl font-bold mb-8 text-(--color-red) '>Your Cart ({totalItems})</h5>
      {cart.items.length === 0 ?
        (
          <div className='flex flex-col items-center pb-4'>
            <img src="/assets/images/illustration-empty-cart.svg" alt="" />
            <p className='pt-2 text-(--color-rose-500)'>Your added items will appear here</p>
          </div>
        ) :
        <div>
          {cart.items.map((item:{id:number, name:string, quantity:number, price:number, total:number}) => (
            <div key={item.id}>
              <div className='flex justify-between border border-t-0 border-x-0  border-b-(--color-rose-100) mb-4 pb-4 items-center'>
                <div>
                  <p className='text-(--color-rose-900) font-bold'>{item.name}</p>
                  <div className='flex gap-2'>
                    <p className='text-(--color-red) font-bold mr-2'>{item.quantity}x</p>
                    <p className='text-(--color-rose-400)'>@ ${item.price.toFixed(2)}</p>
                    <p className='text-(--color-rose-500)'>${item.total.toFixed(2)}</p>
                  </div>
                </div>
                <button className='border rounded-full border-(--color-rose-400)  p-0.5' onClick={() => removeItem(item.id)}><img src="/assets/images/icon-remove-item.svg" alt="remove" /></button>
              </div>
            </div>
          ))}
          < div className='flex justify-between items-center mb-8'>
            <p className='text-black'>Order Total </p>
            <h3 className='font-bold text-2xl'>${cart.total.toFixed(2)}</h3>
          </div>
          <div className='flex items-center justify-center gap-2 mb-8 bg-(--color-rose-50) p-4'>
          <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
            <p>This is a <span className='font-bold'>carbon-neutral</span> delivery</p>
          </div>
          <button className="w-full rounded-4xl bg-(--color-red) text-white py-3" onClick={()=> setConfirm(true)}>Confirm Order</button>
        </div>
      }
    </div >
  )
}

export default Cart