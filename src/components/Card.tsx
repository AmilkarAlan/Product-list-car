
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
    return (
        <div className='w-fit flex flex-col items-center space-y-2'>
            <div className='w-fit rounded-md overflow-hidden'><img className='object-contain' src={props.image.mobile} alt={props.name} /></div>
            <button>Add to cart</button>
            <div className='place-self-start'>
                <p className='font-light'>{props.category}</p>
                <p className='font-bold'>{props.name}</p>
                <p className='font-bold'>{props.price}</p>
            </div>
        </div>
    )
}

export default Card