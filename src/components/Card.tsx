import { useEffect, useState } from "react"
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
    const { addToCart, updateQuantity, cart } = useCart()

    const decrement = () => {
        if (quantity <= 1) {
            setQuantity(0)
            setAddActive(false);
            updateQuantity(id, 0)
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

    useEffect(() => {
        const isInCart = cart.items.some(item => item.id === id);
        if (!isInCart) {
            setQuantity(0)
            setAddActive(false)
        }
    }, [cart.items]);

    const getImageSrc = (width: number) => {
        if (width <= 425) return image.mobile;
        if (width < 1024) return image.tablet;
        return image.desktop;
    };

    const [imageSrc, setImageSrc] = useState(getImageSrc(window.innerWidth));
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 425px)");

        const handleChange = (e: MediaQueryListEvent) => {
            setImageSrc(e.matches ? image.mobile : image.desktop);
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);


    return (
        <div className='w-fit h-full flex flex-col items-center'>
            <div className='w-fit flex justify-center relative'>
                <div className={`overflow-hidden rounded-md border-2 ${addActive ? "border-red-500" : "border-transparent"}`}>
                    <img className='object-cover' src={imageSrc} alt={name} />
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