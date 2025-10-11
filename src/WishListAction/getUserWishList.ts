"use server"
import { getMyToken } from "@/utilities/token";




export async function getUserWishList() {

    const token = await getMyToken()


    if (!token) {

        throw new Error("loginnnn of wish ")
    }

    const response = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
        headers: {

            token: token as string
        }


    })

    const data = await response.json()

    console.log(data);

    return data


}