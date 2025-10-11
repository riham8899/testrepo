import React from 'react'

import { Categorydata } from "./../../types/singleCategory.type"


import Image from 'next/image';


async function Catogries() {

  const respons = await fetch("https://ecommerce.routemisr.com/api/v1/categories")
  const data = await respons.json()

  console.log(data);

  if (!respons.ok) {
    throw new Error("Failed to fetch categories")
  }






  return (
    <section className='w-full px-5 md:px-0  md:w-[80%]  mx-auto my-10'>



      <div className='flex flex-wrap   gap-y-6 '>

        {data.data.map(function (category: Categorydata) {
          return <div key={category._id} className=' w-[80px] sm:w-1/2 md:w-1/3  my-5 p-3 ' >

            <div className='flex flex-col items-center gap-4 shadow-md hover:shadow-green-500 transition duration-150 rounded-2xl '>
              <div>
                <Image src={category.image} alt="image" width={200} height={200} className='w-100 h-80 ' />

              </div>
              <div className='py-3'>
                <h1 className='text-2xl font-semibold text-green-700'> {category.name}</h1>
                <p className='text-gray-500 text-sm'>Slug:{category.slug}</p>
              </div>

            </div>




          </div>
        })}



      </div>




    </section>

  )
}

export default Catogries