const AddButton = ({ active, quantity, decrement, increment }: {
    active: boolean
    quantity: number
    decrement: () => void
    increment: () => void
}) => {
    return (
        <div className={`w-fit h-fit ${active ? "border-transparent" : "border border-(--color-rose-300)"} rounded-4xl absolute -bottom-5 bg-white z-10 overflow-hidden`}>
            {active ?
                <div className="w-full h-full flex items-center justify-center gap-8 py-3 px-8  bg-(--color-red) lg:py-2 lg:px-4">
                    <button className='w-fit aspect-square border border-(--color-rose-50) rounded-full p-1 z-20' onClick={() => decrement()}><img src="/assets/images/icon-decrement-quantity.svg" alt="decrement" /></button>
                    <p className="text-(--color-rose-50)">{quantity}</p>
                    <button className='w-fit aspect-square border border-(--color-rose-50) rounded-full p-1 z-20' onClick={() => increment()}><img src="/assets/images/icon-increment-quantity.svg" alt="increment" /></button>

                </div> :
                <div className='w-full h-full flex justify-center items-center py-3 px-8 lg:py-2 lg:px-4 cursor-pointer' onClick={() => increment()}>
                    <span><img src='/assets/images/icon-add-to-cart.svg' alt="" /></span><p className='font-medium ml-2'>Add to Cart</p>
                </div>}

        </div>
    )
}

export default AddButton