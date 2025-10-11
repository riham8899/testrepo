
"use server"
import { getMyToken } from "@/utilities/token"


export async function getUserCartAction() {

    const token = await getMyToken()

    console.log(token)





    if (!token) {

        throw new Error("loginnnn ")
    }

    const response = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
        headers: {



            token: token as string
        }
    })

    const data = await response.json()

    console.log(data);





    return data

}