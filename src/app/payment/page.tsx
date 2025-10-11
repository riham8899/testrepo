"use client"
import React, { useContext, useRef } from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cartContext } from '@/Context/CartContext';
import { cashPaymentAction } from '@/paymentAction/cashPayment';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { onlinePaymentAction } from '@/paymentAction/onlinePayment';


const Payment = () => {

    const router = useRouter();

    const { cartId, afterPayment } = useContext(cartContext)

    const details = useRef("")
    const phone = useRef("")
    const city = useRef("")

    async function cashPayment() {
        const values = {
            shippingAddress: {

                details: details.current?.value,
                phone: phone.current?.value,
                city: city.current?.value
            }
        }

        try {

            const data = await cashPaymentAction(cartId, values)
            console.log(data);

            toast.success(data.status, {
                position: "top-center",
                duration: 1000
            })


            afterPayment()

            router.push("/allorders")

        } catch (error) {
            console.log(error);

        }


    }
    async function onlinePayment() {
        const values = {
            shippingAddress: {

                details: details.current?.value,
                phone: phone.current?.value,
                city: city.current?.value
            }
        }

        try {

            const data = await onlinePaymentAction(cartId, values)
            console.log(data);

            if (data.status === "success") {
                window.location.href = data.session.url
            }


            afterPayment()

            router.push("/allorders")

        } catch (error) {
            console.log(error);

        }


    }

    return (
        <div className='w-full md:w-1/2 my-10 mx-auto px-5  '>
            <h1 className=' mb-5 font-bold text-3xl text-center'>Payment</h1>
            <div>


                <label htmlFor="details">Details</label>
                <Input ref={details} id='details' type='text' className='my-2' />

                <label htmlFor="phone">Phone</label>
                <Input ref={phone} id='phone' type='tel' className='my-2' />

                <label htmlFor="phone">City</label>
                <Input ref={city} id='city' type='text' className='my-2' />


                <Button className='cursor-pointer ms-5  bg-body text-green-700 hover:bg-green-700 hover:text-blue-50 border-1 border-green-700' onClick={cashPayment}>Cash Payment</Button>
                <Button   className='cursor-pointer ms-5  bg-body text-green-700 hover:bg-green-700 hover:text-blue-50 border-1 border-green-700'   onClick={onlinePayment} >
                    Online Payment
                </Button>
            </div>


        </div>
    )

}

export default Payment