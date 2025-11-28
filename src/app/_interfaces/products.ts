export type ProductType = {
    id: string;
    title: string;
    imageCover: string;
    images: string[];
    description: string;
    category: CategoryType;
    brand: Brandtype;
    price: number;
    ratingsAverage: number;
    priceAfterDiscount?: number;

}
export type CategoryType = {
    _id: string;
    name: string;
    slug: string;
    image: string;
}
export type Brandtype = {
    _id: string;
    name: string;
    slug: string;
    image: string;
}