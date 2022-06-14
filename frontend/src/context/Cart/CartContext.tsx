import React, { useContext, useMemo, useState } from 'react';
import { CartItemType } from './types';

const CartContext = React.createContext(null);

export default function CartProvider(props) {
    const [cartItems, setCartItems] = useState([] as CartItemType[]);

    const totalItemsCount = useMemo(() => {
        return cartItems.reduce((acumulator, item) => {
            return acumulator + item.amount
        },
            0)
    }, [cartItems])

    const cartTotalPrice = useMemo(() => {
        return cartItems.reduce((acumulator, item) => {
            const totalPrice = item.amount * item.value_sale
            return acumulator + totalPrice
        }, 0).toFixed(2)
    }, [cartItems])

    const getTotalItems = (items: CartItemType[]) => {
        return (
            items.reduce((acumulator: number, item) => acumulator + item.amount, 0)
        )
    }

    function handleAddToCart(clickedItem: CartItemType) {
        return (
            setCartItems(previousState => {
                return [...previousState, { ...clickedItem, amount: 1 }]
            })
        )
    };

    function handleUpdateAmountProduct(clickedItem: CartItemType) {
        return (
            setCartItems(previousState => {
                //1. Is the item already added in the cart? // se já tiver um, vai adicionar mais um item
                const isItemInCart = previousState.find(item => item.id === clickedItem.id)

                if (isItemInCart) { //se ja houver retorna esse função
                    return (
                        previousState.map(item => (
                            item.id === clickedItem.id
                                ? { ...item, amount: item.amount + 1 } //fiz um spread(...) do item, pego o valor, e adiciono +1 ao clique
                                : item
                        )
                        )
                    )
                }
            }
            )
        )
    }

    function handleRemoveFromCart(id: number) {
        return (
            setCartItems(previousState => ( //valor antigo
                previousState.reduce((acumulator, item) => { //damos um reduce no valor antigo
                    if (item.id === id) { //se o id do item for igual ao (id:number) da função handleRemoveFromCart então retorna
                        if (item.amount === 1) return acumulator; //se o valor for 1, retorna o acumulador e para aqui, deletando o item do array
                        return [...acumulator, { ...item, amount: item.amount - 1 }]; // do contrario dou um spread(...) no item e tiro um -1 do valor total
                    } else {
                        return [...acumulator, item] // e então retornamos o valor do array
                    }
                }, [] as CartItemType[]) // o acumulador começa com um array[] vazio, to tipo CartItemType
            ))
        )
    };

    function deleteItemFromCart(id: number) {
        return (
            setCartItems(previousState => (
                previousState.filter(item => item.id !== id)
            ))
        )
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            handleAddToCart,
            getTotalItems,
            handleRemoveFromCart,
            handleUpdateAmountProduct,
            deleteItemFromCart,
            totalItemsCount,
            cartTotalPrice,
        }}>
            {props.children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
