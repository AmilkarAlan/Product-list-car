import { useCart } from "../AppContext"
import confirmIcon from "../assets/images/icon-order-confirmed.svg"

function Confirmation({ setConfirm }: { setConfirm: (confirm: boolean) => void }) {
    const { cart, clearCart } = useCart()
    const handleConfirm = () => {
        setConfirm(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
        clearCart();
    }
    return (
        <div className='fixed w-full h-full top-0 left-0 flex items-end bg-gray-700/50 z-20 lg:items-center lg:justify-center lg:py-8'>
            <div className='w-full h-6/7 rounded-xl bg-white px-4 pt-8 overflow-y-auto lg:w-1/2 lg:h-full  '>
                <img src={confirmIcon} alt="confirm" />
                <div className="mt-4">
                    <h1 className="text-4xl font-bold w-1/2 mb-1">Order Confirmed</h1>
                    <p className="text-(--color-rose-400)">We hope you enjoy your food!</p>
                </div>
                <div className="w-full h-fit bg-(--color-rose-50) rounded-xl my-8 p-8">
                    {
                        cart.items.map((item: {id:number, image: { thumbnail: string }, name: string, quantity: number, price: number, total: number }) => (
                            <div key={item.id} className="flex  gap-4 border-b-2 border-b-(--color-rose-100) pb-4 mb-4">
                                <img className="w-16 h-16 object-cover" src={item.image.thumbnail} alt="dessert" />
                                <div className="w-full flex items-center justify-between">
                                    <div className="flex flex-col gap-4">
                                        <p className="font-bold">{item.name}</p>
                                        <div className="flex gap-4">
                                            <p className="font-bold text-(--color-red)">{item.quantity}x</p>
                                            <p className="text-(--color-rose-400)">@${item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <p className="font-bold">${item.total.toFixed(2)}</p>
                                </div>
                            </div>
                        ))
                    }
                    <div className="flex justify-between py-4">
                        <p>Order Total</p>
                        <h3 className='font-bold text-2xl'>${cart.total.toFixed(2)}</h3>
                    </div>
                </div>
                <button className="w-full rounded-4xl bg-(--color-red) text-white py-3 mb-8" onClick={() => handleConfirm()}>Start New Order</button>
            </div>
        </div>
    )
}

export default Confirmation