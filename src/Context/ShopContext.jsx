import { createContext, useState } from "react";
import allProducts from '../Components/Assets/all_product.js';

export const ShopContext = createContext(null);

const defaultBin = () => {
    const bin = {};
    for (let i = 0; i <= allProducts.length; i++) {
        bin[i] = 0;
    }
    return bin;
}

const ShopContextProvider = (props) => {
    const [binQuantity, setBinQuantity] = useState(defaultBin())

    const addToBin = (itemId) => {
        setBinQuantity((prev)=>({...prev, [itemId]:prev[itemId]+1}))
    }
    const removeFromBin = (itemId) => {
        setBinQuantity((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalItems = () => {
        let totalItem = 0;
        for (let item in binQuantity) {
            if (binQuantity[item] > 0) {
                totalItem += binQuantity[item];
            }
        }
        return totalItem
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (let item in binQuantity) {
            if (binQuantity[item] > 0) {
                let info = allProducts.find(i => i.id === +item);
                totalAmount += info.new_price * binQuantity[item]
            }
        }
        return totalAmount
    }

    const context = {allProducts, binQuantity, addToBin, removeFromBin, getTotalAmount, getTotalItems} 

    return (
        <ShopContext.Provider value={context} >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;