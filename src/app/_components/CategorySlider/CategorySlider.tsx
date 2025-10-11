import React from 'react'
import getAllCategories from '@/apis/getAllCategories'
import SwiperCategory from '../SwiperCategory/SwiperCategory'
import { Category } from '../../../types/product.type';


const CategorySlider = async () => {


    const data: Category[] = await getAllCategories()




    return (
        <div>
            <SwiperCategory categories={data} />
        </div>
    )
}

export default CategorySlider