"use client"
import { wishListContext } from '@/Context/wishListContext'
import React, { useContext } from 'react'
import { toast } from 'sonner'

import { Heart } from "lucide-react";







const AddBtnWish = ({ id }: { id: string }) => {

  const { addProToWishList, addProduct, removeWishListPro, getUserWishLIistPro } = useContext(wishListContext)


  const isExist = addProduct?.some(item => item._id === id)

  async function handelBtnToWish() {

    if (!addProduct || addProduct.length === 0) {

      const data = await addProToWishList(id)
      if (data?.status === "success") {
        toast.success(data.message)
      }
      return
    }

    try {
      if (isExist) {

        const data = await removeWishListPro(id)

        if (data?.status === "success") {
          await getUserWishLIistPro() 
          toast.success("Product removed successfully", {
            duration: 1000,
            position: 'top-center'
          })
        }
      } else {

        const data = await addProToWishList(id)


        if (data?.status === "success") {
          await getUserWishLIistPro()



          toast.success("addd product tmam", {
            duration: 1000,
            position: 'top-center'
          })

        }
      }


    } catch (error) {
      console.log(error)
      toast.error("Something went wrong", { duration: 1000, position: 'top-center' })

    }







  }


  return (
    <div>
      <button className='w-full' onClick={handelBtnToWish} >
        <Heart
          size={24}
          className={isExist ? "text-red-600 fill-red-600" : "text-gray-400"}
        />
      </button>
    </div>
  )
}

export default AddBtnWish