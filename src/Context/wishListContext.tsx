"use client"

import { AddToWishList } from "@/WishListAction/addToWishList"
import { getUserWishList } from "@/WishListAction/getUserWishList"
import { removeProductFromWish } from "@/WishListAction/removeProductFromWish"
import { createContext, useEffect, useState } from "react"
import { WishListSuccess, WishProduct } from "./../../src/types/wishList.type"
import { useSession } from 'next-auth/react';








export const wishListContext = createContext({} as {

    addProduct: WishProduct[]
    isLoading: boolean
    setAddProduct: React.Dispatch<React.SetStateAction<WishProduct[]>>
    addProToWishList: (id: string) => Promise<any>
    removeWishListPro: (id: string) => Promise<any>
    getUserWishLIistPro: () => Promise<any>
    numOfWishList: number;
    isInWish: (id: string) => boolean


})

const WishListContextProvidor = ({ children }: { children: React.ReactNode }) => {
    const { data: session } = useSession()

    const [numOfWishList, setNumOFWishList] = useState(0);
    const [addProduct, setAddProduct] = useState<WishProduct[]>([])
    // const [removeProduct, setRemoveProdchildrenuct] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    //  تحديث العدد تلقائي لما addProduct يتغير

    useEffect(() => {
        setNumOFWishList(addProduct.length);
    }, [addProduct]);

    // add pro 
    async function addProToWishList(id: string) {

        try {



            const data = await AddToWishList(id)

            if (data.status === "success") {



                await getUserWishLIistPro();    // 👈 اعملي تحديث بعد الإضافة
            }

            if (data?.data?.products) {
                setAddProduct(data.data.products);
                // setNumOFWishList(data.count)

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
                // setNumOFWishList((prev) => (prev > 0 ? prev - 1 : 0))
                // setNumOFWishList(data.count);

            }
            // setAddProduct(data.data.products)

            return data





        } catch (error) {
            console.log(error);

        }


    }




    async function getUserWishLIistPro() {

        setIsLoading(true)



        try {

            const data: WishListSuccess = await getUserWishList()
            if (data?.status === "success" && Array.isArray(data?.data)) {
                setAddProduct(data?.data)
                // setNumOFWishList((prev) => prev)
                // setNumOFWishList(data.count);

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

    function isInWish(id: string) {
        return addProduct.some((item) => item._id === id);
    }


    useEffect(() => {

        if (session?.accessToken) {
            getUserWishLIistPro()
        }

        // getUserWishLIistPro()

    }, [session])




    return (

        <wishListContext.Provider value={{
            numOfWishList,
            addProduct,
            isLoading,
            setAddProduct,
            removeWishListPro,
            getUserWishLIistPro,
            addProToWishList,
            isInWish


        }}>

            {children}
        </wishListContext.Provider>
    )
}



export default WishListContextProvidor
