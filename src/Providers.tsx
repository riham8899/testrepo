'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'
import CartContextProvider from './Context/CartContext'

import  WishListContextProvidor  from './Context/wishListContext'
export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            <CartContextProvider>


                <WishListContextProvidor>

                    {children}

                </WishListContextProvidor>
                

            </CartContextProvider>


        </SessionProvider>
    )
}

export default Providers