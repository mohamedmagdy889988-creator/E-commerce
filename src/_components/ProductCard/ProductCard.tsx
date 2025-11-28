import Link from "next/link";
import Addproductbtn from '../AddProductBtn/AddProductBtn';
import { ProductCardProps } from './ProductCard.types';
import { createSlug } from "@/utils/utils";

export default function ProductCard({ product }: ProductCardProps) {
    const slug = createSlug(product.title);

    return (




        <div key={product.id} className=' pb-3 rounded-lg'>
            <Link href={`/productDetails/${slug}?id=${product.id}`}>
                <img src={product.imageCover} className='w-full' alt={product.title} />
                <h2>{product.title.split(' ', 2).join(' ')}</h2>

                <h5>price:{product.priceAfterDiscount ? <>

                    <span className='text-red-500 line-through me-2.5 ml-1.5'> ${product.price}</span>
                    <span className='text-green-500'>${product.priceAfterDiscount}</span>
                </> : <span className='text-green-500 ml-1.5'>${product.price}</span>}</h5>

                <p>({product.ratingsAverage})  <i className='fa-solid fa-star text-yellow-400'></i>
                </p>

            </Link>
            <Addproductbtn id={product.id} />
        </div>






    )
}
