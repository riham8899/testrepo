"use server"
import { getMyToken } from '@/utilities/token';
import axios from 'axios';


export async function AddToCart(id: string) {

    
    const token = await getMyToken()

    console.log("TOKEN VALUE AT ADD TO CART.TS:", token);

    if (!token) {

        throw new Error("Token Not Found at AddToCart.ts")
    }




    const values = {

        productId: id
    }

    
        const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/cart", values, {


            headers: {

                token: token,
            },

        })


    

    console.log(data,'line 40');



    return data



} 
