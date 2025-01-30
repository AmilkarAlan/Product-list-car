import { useState } from "react"
import AddButton from "./AddButton"

type Props = {
    image: {
        thumbnail: string
        mobile: string
        tablet: string
        desktop: string
    }
    category: string
    name: string
    price: number
}

const Card = (props: Props) => {
    const [addActive, setAddActive] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const handleAdd = (value: boolean) => {
        setAddActive(value);
        setQuantity(quantity + 1);

    }
    
    const decrement = () => {
        if (quantity <= 1) {
            setQuantity(0)
            setAddActive(false);
            return;
        }
        setQuantity(quantity - 1);
    }

    const increment = () => {
        setQuantity(quantity + 1);
    }

    return (
        <div className='w-fit h-fit flex flex-col items-center'>
            <div className='w-fit flex justify-center relative'>
                <div className="overflow-hidden rounded-t-md">
                    <img className='object-contain' src={props.image.mobile} alt={props.name} />
                </div>
                <AddButton active={addActive} setAddActive={handleAdd} quantity={quantity} decrement={decrement} increment={increment} />
            </div>
            <div className='place-self-start mt-10'>
                <p className='font-light text-(--color-rose-400)'>{props.category}</p>
                <p className='font-bold text-(--color-rose-900)'>{props.name}</p>
                <p className='font-bold text-(--color-red)'>${props.price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Card