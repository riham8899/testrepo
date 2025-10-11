"use client"
import { cartContext } from '@/Context/CartContext'
import React, { useContext } from 'react'
import Loading from './../loading';
import { ProductCart } from '@/types/cart.type';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Payment from './../payment/page';
import Link from 'next/link';





const Cart = () => {

  const { isLoading, totalOfCartPrice, product, removeProItems, updateCart, clearCart } = useContext(cartContext)


  async function removItems(id: string) {

    const data = await removeProItems(id)

    console.log(data);

    if (data.status === "success") {
      toast.success("delet.tmam ", {
        duration: 1000,
        position: 'top-center'
      })

    } else {
      toast.error("erorr delet  nooooooooo", {
        duration: 1000,
        position: 'top-center'
      })

    }

    return data


  }


  if (isLoading) {
    return <Loading />
  }


  if (product.length == 0) {

    return <div className=' flex justify-center items-center h-screen'>
      <h1 className='text-red-900 text-3xl font-bold'>  NO Product Recently</h1>

    </div>
  }








 

  return (
    <div className='w-full md:w-[80%] mx-auto my-10 px-5 bg-slate-100 md:px-0' >
      <div className='p-5'>
        <h1 className=' text-2xl font-bold'>Shop Cart</h1>
        <p className=' my-3 text-green-500'> Total Price :{totalOfCartPrice} EGP</p>
        <Button onClick={clearCart} className='cursor-pointer  bg-body text-red-700 hover:bg-red-700 hover:text-blue-50'><i className="fa-solid fa-trash-can"> </i>  Clear All Cart</Button>
        <Button  className='cursor-pointer ms-5  bg-body text-green-700 hover:bg-green-700 hover:text-blue-50'> <i className="fa-solid fa-bag-shopping"></i>
          <Link href={"/payment"}>Payment</Link>
        </Button>

        <div className='all'>
          {product.map(function (product: ProductCart, idx: number) {
            return <div key={idx} className='flex items-center justify-between py-3 border-b-2 border-green-900' >
              <div className=' flex flex-row items-center gap-5'>
                <div>
                  <Image src={product.product.imageCover} alt="image" width={200} height={400} />

                </div>
                <div>
                  <h1> {product.product.title}</h1>
                  <p className='text-green-500 my-3'> price :{product.price}</p>
                  <Button className='cursor-pointer bg-body text-red-700 hover:bg-red-700 hover:text-blue-50' onClick={() => removItems(product.product.id)}><i className="fa-solid fa-trash-can"> </i>  Remove</Button>

                </div>
              </div>

              <div className='flex flex-row items-center gap-2'>
                <Button className='cursor-pointer' onClick={() => updateCart(product.product.id, product.count + 1)}>+</Button>
                <p>{product.count}</p>
                <Button className='cursor-pointer' onClick={() => updateCart(product.product.id, product.count - 1)}>-</Button>
              </div>

            </div>
          })}
        </div>

      </div>

    </div>
  )
}

export default Cart