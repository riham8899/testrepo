
"use server"
import { getMyToken } from "@/utilities/token"
import axios from "axios";




export async function AddToWishList(id: string) {

    const token = await getMyToken()

    console.log(token, "wishToken");

    if (!token) {
        throw new Error("login from wish");

    }

    const values = {
        productId: id
    }

    const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist", values, {

        headers: {
            token: token,
        }


    })

    console.log(data)


    return data



}