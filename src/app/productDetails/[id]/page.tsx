import Addproductbtn from '@/_components/AddProductBtn/AddProductBtn';
import { getSpecifiedProduct } from '@/_service/Products.Service';

type Props = { params: { id: string }, searchParams?: { id?: string } }

export default async function ProductDetails({ params, searchParams }: Props) {
  const productId = searchParams?.id || params.id;
  const product = await getSpecifiedProduct(productId);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-xl">Product not found</p>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-6 gap-7 py-10 px-5'>
      <div className='col-span-1'>
        <div className='flex flex-col gap-3'>
          {product.images?.map((img: string, index: number) => (
            <img
              key={index}
              src={img}
              alt={`${product.title}-${index}`}
              className='w-full h-24 object-cover rounded-md cursor-pointer hover:ring-2 hover:ring-green-500'
            />
          ))}
        </div>
      </div>
      <div className='col-span-3'>
        <img
          src={product.imageCover}
          className="mx-auto h-150 object-cover"
          alt={product.title}
        />
      </div>
      <div className='col-span-2'>
        <h1 className='font-bold text-2xl'>{product.title}</h1>
        <p className='mt-2'>{product.ratingsAverage} <i className='fa-solid fa-star text-yellow-400'></i></p>
        <h3 className='mt-2'>
          {product.priceAfterDiscount ? (
            <>
              <span className='text-red-500 line-through me-2.5 text-2xl'>${product.price}</span>
              <span className='text-2xl'>${product.priceAfterDiscount}</span>
            </>
          ) : <span className='text-2xl'>${product.price}</span>}
        </h3>
        <p className='mt-3 text-sm'>{product.description}</p>
        <h4 className='mt-3'>Category: {product.category.name}</h4>
        <h4 className='mt-1'>Brand: {product.brand.name}</h4>
        <div className='mt-4'>
          <Addproductbtn id={product.id} />
        </div>
      </div>
    </div>
  );
}
