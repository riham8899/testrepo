export default async function getAllProduct() {



    const response = await fetch("https://ecommerce.routemisr.com/api/v1/products")
    const { data } = await response.json()


    console.log(data)
    return data
    
}

