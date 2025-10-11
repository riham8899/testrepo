"use client"

import React from 'react'

import { Heart } from 'lucide-react';
import { useContext } from 'react';
import { wishListContext } from '@/Context/wishListContext';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Loading from './../loading';
import { WishProduct } from '@/types/wishList.type';
import { toast } from 'sonner';
import AddBtnCart from '../_components/AddBtnCart/AddBtnCart';



const WishList = () => {

  const { removeWishListPro, isLoading, addProduct } = useContext(wishListContext)


  async function removeOnewish(id: string) {




    try {


      const data = await removeWishListPro(id)



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






    } catch (error) {
      console.log(error);



    }






  }






  return (
    <div className='w-full md:w-[80%] mx-auto my-10 px-5 bg-slate-100 md:px-0'>

      <div className='p-5 flex flex-row gap-2  justify-center'>
          <h1 className=' text-3xl font-bold'>Wish list</h1>
          <Heart className='text-red-600  fill-red-600' />
        </div>
      <div className='px-5 '>
        {Array.isArray(addProduct) && addProduct?.map(function (item: WishProduct) {

          return <div key={item._id} className='flex flex-column items-center justify-between py-3 border-b-2 border-green-900'>
            <div className=' flex flex-row items-center gap-5'>
              <div>
                <Image src={item.imageCover || "/placeholder.png"} alt={item.title} width={200} height={200} />

              </div>
              <div>
                <h1> {item.title}</h1>
                <p className='text-green-500 my-3'> price :{item.price}</p>
                <Button className='cursor-pointer bg-body text-red-700 hover:bg-red-700 hover:text-blue-50' onClick={() => removeOnewish(item._id)}>
                  <i className="fa-solid fa-trash-can"> </i>  Remove
                </Button>

              </div>
            </div>

            <div>
              <AddBtnCart id={item._id} />

            </div>

          </div>
        })}



      </div>
    </div>
  )
}

export default WishList