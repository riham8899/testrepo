"use client"
import React, { useContext } from 'react'
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { cartContext } from '@/Context/CartContext';


export const AddBtnCart = ( {id }:{id:string}) => {

    const { addProTocart } = useContext(cartContext)


    async function handelBtnToCart() {


        const data = await addProTocart(id)
        // const {data}= await AddToCart(id)

        console.log(data);

        if (data.status === "success") {
            toast.success(data.message, {
                duration: 1000,
                position: 'top-center'
            })

        } else {
            toast.error("erorr falid to add this product in cart  nooooooooo", {
                duration: 1000,
                position: 'top-center'
            })

        }


    }

    return (
        <div>
            <Button variant="default" className='w-full bg-green-800 hover:bg-green-600 transition duration-300' onClick={handelBtnToCart}>+ADD Product</Button>
        </div>
    )
}

export default AddBtnCart