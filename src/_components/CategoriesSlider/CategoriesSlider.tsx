import { getAllCategories } from '@/_service/Categories.Service';
import MySwiper from '../MySwiper/MySwiper';

export default async function CategoiesSlider() {
  const allCategorires = await getAllCategories();
  console.log('allCategories', allCategorires);
  if (allCategorires == null) {
    return;
  }
  return (
    <div className=' '>
      <MySwiper spaceBetween={20} slidesPerView={5} imagesList={allCategorires.map(category => category.image) }/>
    </div>
  )
}                 
