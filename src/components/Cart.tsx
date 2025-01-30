import React from 'react'

type Props = {
    items:number
}

const Cart = (props: Props) => {
  return (
    <div className='w-full h-full bg-white p-4 rounded-2xl'>
        <h5 className='text-3xl font-bold mb-8 text-(--color-red) '>Your Cart ({props.items})</h5>
    </div>
  )
}

export default Cart