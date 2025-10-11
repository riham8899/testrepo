"use client"

import { AddToWishList } from "@/WishListAction/addToWishList"
import { getUserWishList } from "@/WishListAction/getUserWishList"
import { removeProductFromWish } from "@/WishListAction/removeProductFromWish"
import { createContext, useEffect, useState } from "react"
import { WishListSuccess, WishProduct } from "./../../src/types/wishList.type"








export const wishListContext = createContext({} as {

    addProduct: WishProduct[]
    isLoading: boolean
    setAddProduct: React.Dispatch<React.SetStateAction<WishProduct[]>>
    addProToWishList: (id: string) => Promise<any>
    removeWishListPro: (id: string) => Promise<any>
    getUserWishLIistPro: () => Promise<any>


})

const WishListContextProvidor = ({ children }: { children: React.ReactNode }) => {


    const [addProduct, setAddProduct] = useState<WishProduct[]>([])
    // const [removeProduct, setRemoveProdchildrenuct] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    // add pro 
    async function addProToWishList(id: string) {

        try {

            const data = await AddToWishList(id)

            if (data?.data?.products) {
                setAddProduct(data.data.products);
            }


            console.log("Add response:", data)
            return data


        } catch (error) {

            console.log("AddToWishList error:", error)
            return null


        }
    }

    // delet pro wish


    async function removeWishListPro(id: string) {

        try {
            const data = await removeProductFromWish(id)


            if (data.status === "success") {

                setAddProduct((prev) => prev.filter((item) => item._id !== id))

            }
            // setAddProduct(data.data.products)

            return data


            // setAddProduct(data.products)


        } catch (error) {
            console.log(error);

        }


    }




    async function getUserWishLIistPro() {

        setIsLoading(true)



        try {

            const data: WishListSuccess = await getUserWishList()
            if (data?.status === "success" && Array.isArray(data?.data)) {
                setAddProduct(data.data)

            } else {
                setAddProduct([])
                console.warn("Wishlist empty or unexpected API format")
            }





            console.log("Wishlist loaded:", data.data);


        } catch (error) {
            console.log(error);
            setAddProduct([])

        } finally {
            setIsLoading(false) 
        }



    }


    useEffect(() => {


        getUserWishLIistPro()

    }, [])




    return (

        <wishListContext.Provider value={{
            addProduct,
            isLoading,
            setAddProduct,
            removeWishListPro,
            getUserWishLIistPro,
            addProToWishList


        }}>

            {children}
        </wishListContext.Provider>
    )
}



export default WishListContextProvidor
