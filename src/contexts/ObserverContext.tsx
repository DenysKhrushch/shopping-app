'use client';

import {createContext, FC, ReactNode, useContext, useState} from "react";
import {Product} from "@/interfaces/Product";

interface ObserverContextProps {
    cart?: Product[];
    open?: boolean;
    setOpen?: (open: boolean) => void;
    children?: ReactNode;
    addProductToCart?: (product: Product) => void,
    removeProductFromCart?: (product: Product) => void,
    clearCart?: () => void,
}

const ObserverContext = createContext<ObserverContextProps>({});

interface MyContextProviderProps {
    cart?: Product[];
    open: boolean;
    setOpen: (open: boolean) => void;
    children: ReactNode;
    addProductToCart?: (product: Product) => void,
    removeProductFromCart?: (product: Product) => void,
    clearCart?: () => void,
}


export const MyContextProvider: FC<MyContextProviderProps> = ({ children }) => {

    const [cart, setCart] = useState<Product[]>([]);
    const [open, setOpen] = useState<boolean>(false);

    const addProductToCart = (productToAdd: Product) => {
console.log(productToAdd)
        setCart((currentCart) => {
            const isProductInCart = currentCart.some(product => product.id === productToAdd.id);

            if (!isProductInCart) {
                return [...currentCart, productToAdd];
            } else {
                return currentCart;
            }
        });
    };

    const removeProductFromCart = (productToRemove: Product) => {
        setCart((currentCart) => {
            return currentCart.filter(product => product.id !== productToRemove.id);
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <ObserverContext.Provider value={{ cart, addProductToCart, removeProductFromCart, clearCart, open, setOpen }}>
            {children}
        </ObserverContext.Provider>
    );
};

export const useObserverContext = () => useContext(ObserverContext);
