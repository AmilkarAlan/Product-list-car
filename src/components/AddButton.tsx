import decrementIcon from "../assets/images/icon-decrement-quantity.svg"
import incrementIcon from "../assets/images/icon-increment-quantity.svg"
import cartIcon from '../assets/images/icon-add-to-cart.svg'
type Props = {
    active: boolean
    quantity: number
    setAddActive: (value: boolean) => void
    decrement: () => void
    increment: () => void

}

const AddButton = (props: Props) => {
    return (
        <div className='w-1/2 h-fit border rounded-4xl absolute -bottom-5 bg-white z-10 overflow-hidden'>
            {props.active ?
                <div className="w-full h-full flex items-center justify-around py-2 px-4 bg-(--color-red)">
                    <button className='w-fit aspect-square border border-(--color-rose-50) rounded-full p-1 z-20' onClick={()=>props.decrement()}><img src={decrementIcon} alt="decrement" /></button>
                    <p className="text-(--color-rose-50)">{props.quantity}</p>
                    <button className='w-fit aspect-square border border-(--color-rose-50) rounded-full p-1 z-20' onClick={()=>props.increment()}><img src={incrementIcon} alt="increment" /></button>
                    
                </div> :
                <div className='w-full h-full flex justify-center items-center py-2 px-4' onClick={() => props.setAddActive(true)}>
                    <span><img src={cartIcon} alt="" /></span><p className='font-medium ml-2'>Add to Cart</p>
                </div>}

        </div>
    )
}

export default AddButton