import { createContext, useContext } from "react";

export const ProductContext = createContext({
    products: [

    ],
    addToCartFunc: () => { },
    removeFromCartFunc: () => { }
})

export const ProdProvider = ProductContext.Provider;

export const useCart = () => {
   return  useContext(ProductContext)
}
