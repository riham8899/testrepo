"use client"
import { AddToCart } from '@/CartAction/addToCart'
import { clearCartAction } from '@/CartAction/clearCart'
import { getUserCartAction } from '@/CartAction/getUserCart'
import { removeCartItemAction } from '@/CartAction/removeCartItems'
import { updateCartAction } from '@/CartAction/updateCart'
import { Cart } from '@/types/cart.type'
import React, { createContext, useEffect, useState } from 'react'







export const cartContext = createContext({})

const CartContextProvidor = ({ children }: { children: React.ReactNode }) => {


    const [numOfCart, setNumOFCart] = useState(0)
    const [totalOfCartPrice, setTotalOfCartPrice] = useState(0)
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [cartId, setICartId] = useState("")


    async function addProTocart(id: string) {

        try {

            const data = await AddToCart(id)
            console.log(data, 'line 33');

            getUserCart()
            // console.log(data);
            return data


        } catch (error) {




        }
    }
    // remov


    async function removeProItems(id: string) {

        try {
            const data = await removeCartItemAction(id)

            setNumOFCart(data.numOfCartItems),
                setTotalOfCartPrice(data.data.totalCartPrice),
                setProduct(data.data.products)

            return data


        } catch (error) {
            console.log(error);


        }


    }

    // updata

    async function updateCart(id: string, count: number) {
        try {


            const data = await updateCartAction(id, count)

            setNumOFCart(data.numOfCartItems),
                setTotalOfCartPrice(data.data.totalCartPrice),
                setProduct(data.data.products)

            return data

        } catch (error) {



            console.log(error);


        }
    }
    // clear cart

    async function clearCart() {

        try {

            const data = await clearCartAction()
            setNumOFCart(0),
                setTotalOfCartPrice(0),

                setProduct([])

            return data

        } catch (error) {

        }
    }







    async function getUserCart() {
        setIsLoading(true)

        try {

            const data: Cart = await getUserCartAction()
            console.log(data);

            setNumOFCart(data.numOfCartItems),
                setTotalOfCartPrice(data.data.totalCartPrice),
                setProduct(data.data.products),
                setIsLoading(false)
            setICartId(data.cartId)





        } catch (error) {
            console.log(error);


        }



    }

    useEffect(function () {

        getUserCart()

    }, [])

    function afterPayment() {
        
        setICartId("")

        setNumOFCart(0),
        setTotalOfCartPrice(0),
        setProduct([])

    }


    return (
        <cartContext.Provider value={{
            numOfCart,
            totalOfCartPrice,
            product,
            isLoading,
            addProTocart,
            removeProItems,
            updateCart,
            clearCart,
            cartId,
            afterPayment
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvidor