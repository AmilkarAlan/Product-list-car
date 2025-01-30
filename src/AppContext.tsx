import { createContext, ReactNode } from "react";

type AppContextType = {
    itemsQuantity: number
    items: {
        name: string
        quantity: number
        price: number
        totalUnit: number
    }
    total: number
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({children}: {children: ReactNode}) => {

}