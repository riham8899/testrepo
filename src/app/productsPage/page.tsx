
"use client"
import React, { useEffect, useState } from 'react'
import getAllProduct from '@/apis/getAllproduct';
import { Product } from './../../types/product.type';
import ProductCart from "./../_components/productCart/ProductCart";
import { Input } from "@/components/ui/input"




const ProductsPage = () => {



    const [products, setProducts] = useState<Product[]>([])

    const [search, setSearch] = useState<string>("")

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllProduct()
            setProducts(data)
        }
        fetchData()
    }, []);


    const filteredProducts = products.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
    )


    return (

        <section className='w-full px-5 md:px-0  md:w-[80%] my-5 mx-auto'>
            <h1 className='  font-bold text-3xl text-center'>All ProductS</h1>

            <div className="grid w-full max-w-sm items-center gap-3 mx-auto my-10 ">

                <Input id="search" type="text" placeholder='search' value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className='flex  flex-wrap'>

                {filteredProducts.map((product: Product) => <ProductCart product={product} key={product.id} />)}
            </div>



        </section>


    )
}

export default ProductsPage