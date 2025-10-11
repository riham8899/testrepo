import getSingleProduct from '@/apis/singleProduct'



import React from 'react'
import Image from 'next/image';
import AddBtnCart from '@/app/_components/AddBtnCart/AddBtnCart';


const productDetails = async ({ params }: { params: { id: string } }) => {

  const { id } = await params
  const data = await getSingleProduct(id)
  console.log(data);




  return (




    <div className='  flex  flex-col  w-[80%] justify-between items-center m-auto md:flex-row my-10'>
      <div className=' w-full md:w-1/3 border-1 border-info'>

        <Image className='w-full' src={data.data.imageCover} alt='data.data.title' width={500} height={500} />
      </div>
      <div className=' w-full md:w-2/3  ps-10'>
        <h2 className=' text-green-500 font-bold my-5 text-2xl'>{data.data.title}</h2>
        <p className='font-bold'>{data.data.description}</p>
        <p className='font-bold mt-2'>{data.data.category.name}</p>
        <div className='flex justify-between items-center w-full mt-2'>
          <p>{data.data.Price} KGP</p>
          <p>
            <i className="fa-solid fa-star text-yellow-300"></i>
            {data.data.ratingsAverage}
          </p>


        </div>

        <AddBtnCart id={id} />


      </div>
    </div>

  )
}

export default productDetails