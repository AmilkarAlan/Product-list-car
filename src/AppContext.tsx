import { createContext, ReactNode, useContext, useReducer } from "react";
interface Image {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
}
interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
    total: number
    image: Image
}

interface CartState {
    items: CartItem[];
    total: number;
}


const initialState: CartState = {
    items: [],
    total: 0
};
const cartReducer = (state: CartState, action: any): CartState => {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItem = state.items.find((item) => item.id === action.payload.id); // Buscar si el item está en el carrito

            let updatedItems; // Declaramos la variable fuera de la condición para que sea accesible en todo el bloque

            if (existingItem) { // Si existe se actualizan los valores
                updatedItems = state.items.map((item) =>
                    item.id === action.payload.id
                        ? {
                            ...item,
                            quantity: item.quantity + action.payload.quantity,
                            total: (item.quantity + action.payload.quantity) * item.price,
                        }
                        : item // Si no coincide, deja el item como está
                );
            } else {
                updatedItems = [...state.items, { ...action.payload, total: action.payload.price }];
            }

            return {
                ...state,
                items: updatedItems,
                total: updatedItems.reduce((acc, item) => acc + item.total, 0), // Actualiza total
            };

        case "UPDATE_QUANTITY":
            const updatedItemsQuantity = state.items
                .map((item) =>
                    item.id === action.payload.id
                        ? {
                            ...item,
                            quantity: action.payload.quantity,
                            total: action.payload.quantity * item.price,
                        }
                        : item
                )
                .filter((item) => item.quantity > 0); // Elimina si la cantidad es 0

            return {
                ...state,
                items: updatedItemsQuantity,
                total: updatedItemsQuantity.reduce((acc: number, item: { total: number }) => acc + item.total, 0), // Actualiza total
            };

        case "CLEAR_CART":
            return {
                items: [],
                total: 0,
            };

        case "REMOVE_ITEM": // Nueva acción para eliminar un producto
            const filteredItems = state.items.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                items: filteredItems,
                total: filteredItems.reduce((acc, item) => acc + item.total, 0),
            };

        default:
            return state;
    }
};

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState);
    const addToCart = (product: CartItem) => {
        dispatch({ type: "ADD_TO_CART", payload: product });
    }
    const updateQuantity = (id: number, quantity: number) => {
        dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    };
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };
    const removeItem = (id: number) => {
        dispatch({ type: "REMOVE_ITEM", payload: { id } })
    }
    return (
        <CartContext.Provider value={{ cart: cartState, addToCart, updateQuantity, clearCart, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useAppContext debe usarse dentro de un AppProvider");
    }
    return context
}