import { useState } from "react"
import AddButton from "./AddButton"
import { useCart } from "../AppContext"

const Card = ({ id, name, price, category, image }: {
    id: number, name: string, price: number, category: string, image: {
        thumbnail: string
        mobile: string
        tablet: string
        desktop: string
    }
}) => {
    const [addActive, setAddActive] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const { addToCart, updateQuantity } = useCart()

    const decrement = () => {
        if (quantity <= 1) {
            setQuantity(0)
            setAddActive(false);
            updateQuantity(id,0)
            return;
        }
        setQuantity(quantity - 1);
        updateQuantity(id, quantity - 1)
    }

    const increment = () => {
        if (quantity === 0) {
            setAddActive(true);
            setQuantity(quantity + 1);
            addToCart({ image, id, name, price, quantity: 1 });
            return
        }
        setQuantity(quantity + 1)
        updateQuantity(id, quantity + 1)
    }

    return (
        <div className='w-fit h-fit flex flex-col items-center'>
            <div className='w-fit flex justify-center relative'>
                <div className="overflow-hidden rounded-t-md">
                    <img className='object-contain' src={image.mobile} alt={name} />
                </div>
                <AddButton active={addActive} quantity={quantity} decrement={decrement} increment={increment} />
            </div>
            <div className='place-self-start mt-10'>
                <p className='font-light text-(--color-rose-400)'>{category}</p>
                <p className='font-bold text-(--color-rose-900)'>{name}</p>
                <p className='font-bold text-(--color-red)'>${price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Card