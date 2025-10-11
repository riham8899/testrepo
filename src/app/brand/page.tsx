

"use client";
import React from 'react'

import { useState, useEffect } from "react";
import Image from 'next/image';
import { Branddata } from './../../types/brand.type';



function Brand() {

  const [brands, setBrands] = useState<Branddata[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<Branddata | null>(null);


  useEffect(() => {
    async function fetchBrands() {
      try {
        const respons = await fetch("https://ecommerce.routemisr.com/api/v1/brands");
        const data = await respons.json();
        setBrands(data.data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    }
    fetchBrands();
  }, []);







  return (
    <section className='w-full px-5 md:px-0  md:w-[70%]  mx-auto my-5'>
      <h1 className='text-3xl font-semibold text-green-700 my-5 text-center'> ALL Brands</h1>
      <div className='flex flex-wrap   gap-y-6  '>

        {brands.map(function (brand: Branddata) {
          return <div key={brand._id} className='  w-full sm:w-1/2 md:w-1/3  p-3 ' >

            <div className='flex flex-col items-center gap-4 shadow-md hover:shadow-green-500 transition duration-150 rounded-md '>
              <div>
                <Image src={brand.image} alt="image" width={200} height={200} className='w-50 h-40' onClick={() => setSelectedBrand(brand)} />

              </div>
              <div >
                <h1 className='text-2xl font-semibold text-green-700 pb-2'> {brand.name}</h1>

              </div>


            </div>




          </div>
        })}



      </div>
      {selectedBrand && (
        <div className="fixed inset-0 bg-black/50  flex justify-center items-start pt-20 z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md relative p-5 text-center">

            <button
              className="absolute top-3 right-3 text-gray-700 text-xl font-bold hover:text-red-500"
              onClick={() => setSelectedBrand(null)}>
              ✕
            </button>

          <div className='border-b border-t my-7'>
            <Image
              src={selectedBrand.image}
              alt={selectedBrand.name}
              width={200}
              height={200}
              className="mx-auto rounded-md"
            />
            <h2 className="text-2xl font-semibold text-green-700 ">
              {selectedBrand.name}
            </h2>
            </div>
            <button
              onClick={() => setSelectedBrand(null)}
              className=" px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Close
            </button>
          </div>
        </div>
      )}






    </section>
  )
}

export default Brand