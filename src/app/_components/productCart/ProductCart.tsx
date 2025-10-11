import React from 'react'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../../../types/product.type';

import AddBtnCart from '../AddBtnCart/AddBtnCart';
import AddBtnWish from '../addBtnWishList/addBtnWish';

const ProductCart = ({ product }: { product: Product }) => {
    return (
        <div className='w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-3' >

            <div className="inner ">

                <Card className='p-2 shadow-md hover:shadow-green-500 transition duration-150 '>
                    <Link href={`/productDetails/${product.id}`}>
                        <CardHeader className='p-0'>
                            <Image src={product.imageCover} alt='imagee' width={500} height={500} />

                        </CardHeader>
                        <CardContent className='p-0'>
                            <p className='text-center text-green-500 font-bold'>{product.category.name}</p>
                            <p className='text-center line-clamp-1'>{product.title}</p>
                        </CardContent>
                        <CardFooter className='p-0'>
                            <div className='flex justify-between items-center w-full'>
                                <p>{product.price} KGP</p>
                                <p>
                                    <i className="fa-solid fa-star text-yellow-300"></i>
                                    {product.ratingsAverage}
                                </p>
                            </div>

                        </CardFooter>
                    </Link>
                    <div className="  flex flex-row justify-around items-center">
                        <AddBtnCart id={product.id} />
                        <AddBtnWish id={product.id} />
                    </div>

                </Card>


            </div>





        </div >
    )
}

export default ProductCart