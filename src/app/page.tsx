import HomeSlider from '@/_components/HomeSlider/HomeSlider';
import ProductCard from '@/_components/ProductCard/ProductCard';
import { getAllProducts } from '@/_service/Products.Service';
import { lazy, Suspense } from 'react';

const CategoiesSlider = lazy(() =>import ('@/_components/CategoriesSlider/CategoriesSlider'))

export default async function Home() {


  const allProducts = await getAllProducts();

  function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")    
    .trim()
    .replace(/\s+/g, "-");         
}

  return (

    <>
      <HomeSlider />

      <Suspense fallback={<div>Loading...</div>} >
         <CategoiesSlider />
      </Suspense>
   

      <div className='grid grid-cols-4 gap-5 w-3/4 mx-auto pb-5'>

        {allProducts?.map(product => <ProductCard key={product.id} product={product} />)}

      </div>

    </>


  )
}
