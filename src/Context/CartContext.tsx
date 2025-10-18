"use client"
import { AddToCart } from '@/CartAction/addToCart';
import { clearCartAction } from '@/CartAction/clearCart';
import { getUserCartAction } from '@/CartAction/getUserCart';
import { removeCartItemAction } from '@/CartAction/removeCartItems';
import { updateCartAction } from '@/CartAction/updateCart';
import { Cart, ProductCart } from '@/types/cart.type';
import { useSession } from 'next-auth/react';
import React, { createContext, useEffect, useState } from 'react';







export const cartContext = createContext({});

const CartContextProvidor = ({ children }: { children: React.ReactNode }) => {

    const { data: session } = useSession()
    const [numOfCart, setNumOFCart] = useState(0);
    const [totalOfCartPrice, setTotalOfCartPrice] = useState(0);
    const [product, setProduct] = useState<ProductCart[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [cartId, setICartId] = useState("");


    async function addProTocart(id: string) {

        try {

            const data = await AddToCart(id)
            getUserCart()
            console.log(data, 'line 33');


            // console.log(data);
            return data;


        } catch (error) {
            console.log(error);



        }
    }
    // remov


    async function removeProItems(id: string) {

        try {
            const data = await removeCartItemAction(id)

            setNumOFCart(data.numOfCartItems);
            setTotalOfCartPrice(data.data.totalCartPrice);
            setProduct(data.data.products);

            return data


        } catch (error) {
            console.log(error);


        }


    }

    // updata

    async function updateCart(id: string, count: number) {
        try {


            const data = await updateCartAction(id, count)

            setNumOFCart(data.numOfCartItems);
            setTotalOfCartPrice(data.data.totalCartPrice);
            setProduct(data.data.products);

            return data

        } catch (error) {
            console.log(error);


        }
    }
    // clear cart

    async function clearCart() {

        try {

            const data = await clearCartAction()
            setNumOFCart(0);
            setTotalOfCartPrice(0);

            setProduct([]);

            return data

        } catch (error) {
            console.log(error);

        }
    }







    async function getUserCart() {
        
        setIsLoading(true);

        try {

            const data: Cart = await getUserCartAction();

            setNumOFCart(data.numOfCartItems);
                setTotalOfCartPrice(data.data.totalCartPrice);
                setProduct(data.data.products);
                setICartId(data.cartId);
            setIsLoading(false);
            console.log(data);





        } catch (error) {
            setIsLoading(false);

            console.log(error);


        }



    }


    function afterPayment(){

        setICartId("");

        setNumOFCart(0);
            setTotalOfCartPrice(0);
            setProduct([])

    }




    useEffect(function() {

        getUserCart();

        // if (session?.user) {
        //     getUserCart()
        // }


        if (session?.accessToken) {
      getUserCart(); // دي الفانكشن اللي بتجيب بيانات الكارت
    }

    }, [session]);




    return (
        <cartContext.Provider value={{
            numOfCart:numOfCart,
            totalOfCartPrice,
            product,
            isLoading,
            addProTocart:addProTocart,
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