import getAllProduct from '@/apis/getAllproduct';
import React from 'react'
import ProductCart  from "./_components/productCart/ProductCart"
import MainSlider from './_components/MainSlider/MainSlider';
import CategorySlider from './_components/CategorySlider/CategorySlider';
import { Product } from '@/types/product.type';



async function Home() {

    

  const data:Product[] = await getAllProduct()


  return (
    <section className='w-full px-5 md:px-0  md:w-[80%] my-5 mx-auto'>
    <MainSlider/>
    <CategorySlider/>
      <div className='flex  flex-wrap'>
        {data.map((Product:Product, idx) => <ProductCart key={idx} product ={Product}/> )}
      </div>


    </section>
  )
}

export default Home
