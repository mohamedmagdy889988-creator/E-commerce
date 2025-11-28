type CategoryType = {
  _id: string;
  name: string;
  slug: string;
  image?: string;
};

type SubCategoryType = {
  _id: string;
  name: string;
  slug: string;
  category: string;
};

type BrandType = {
  _id: string;
  name: string;
  slug: string;
  image?: string;
};

type ProductType = {
  _id: string;
  id: string;
  title: string;
  imageCover: string;
  category: CategoryType;
  subcategory: SubCategoryType[];
  brand: BrandType;
  ratingsQuantity: number;
  ratingsAverage: number;
};

type CartItemType = {
  _id: string;
  count: number;
  price: number;
  product: ProductType;
};

type UserType = {
  _id: string;
  name: string;
  email: string;
  phone: string;
};

type ShippingAddressType = {
  details: string;
  phone: string;
  city: string;
};

type OrderType = {
  _id: string;
  id: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  createdAt: string;
  updatedAt: string;
  cartItems: CartItemType[];
  shippingAddress: ShippingAddressType;
  user: UserType;
};


