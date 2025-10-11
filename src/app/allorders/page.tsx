import { getUserOrders } from '@/apis/getUserOrders'
import { CartItem, OneOrder, Orders } from '@/types/order.type';
import Image from 'next/image';
import React from 'react'

const AllOrders = async () => {

    const data: Orders = await getUserOrders()

    console.log(data);

    return (
        <div className=' md:w-[80%] mx-auto w-full my-10 px-5'>
            <h1 className='text-center font-bold text-3xl'>All Orders</h1>
            <div className='p-5 w-full '>
                {data.map(function (order: OneOrder, idex: number) {
                    return <div key={idex}  >

                        <div className='flex gap-3 my-4  flex-wrap md:flex-nowrap  '>
                            {order.cartItems.map(function (item: CartItem, idex: number) {
                                return <div className='w-full ms-2 transform transition duration-300 hover:scale-110 shadow-2xl shadow-emerald-200 border-2 rounded-2xl p-2' key={idex}>
                                    <div >
                                        <Image src={item.product.imageCover} alt={item.product.title} height={200} width={200} className='w-full h-80' />

                                        <h2 className='line-clamp-1 text-center text-gray-500 pt-2'>{item.product.title} </h2>
                                    </div>

                                </div>
                            })}
                        </div>

                        <div className='my-5'>
                            <h2 className=' text-green-600'>
                                Payment Method Type: {order.paymentMethodType}
                            </h2>
                            <h2 className='text-gray-600'>
                                Total Price: {order.totalOrderPrice} EGP
                            </h2>
                        </div>






                    </div>
                })}


                <div className='mt-10'> <h2 className='  text-black font-bold text-center'>We always strive for customer satisfaction.</h2>

                    <h3 className="text-gray-400 text-center">If you have any problems, please contact customer service @</h3>
                </div>



            </div>
        </div>
    )
}

export default AllOrders