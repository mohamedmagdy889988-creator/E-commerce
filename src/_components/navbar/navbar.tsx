"use client";
import { getUserCart } from '@/_service/cart.service';
import { getAllProducts } from '@/_service/Products.Service';
import { ProductType } from '@/app/_interfaces/products';
import { Button } from '@/components/ui/button';
import { CartContext } from '@/context/cart.context';
import { ShoppingCart } from "lucide-react";
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';


export default function Navbar() {
  const { data: isAuthenticated } = useSession();
  const [initialCartcount, setCartCount] = useState(0);
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const { cartCount } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  const filteredProducts = allProducts.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function fetchProducts() {
      try {
        const Products = await getAllProducts();
        const safeProducts = Products || [];
        console.log("✅ fetched products length:", safeProducts.length);
        setAllProducts(safeProducts);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setAllProducts([]);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    getUserCart().then(res => {
      setCartCount(res.numOfCartItems);
    })
  }, []);


  async function handleLogout() {
    const res = await signOut({
      redirect: true,
      callbackUrl: '/login',
    })
    toast.success('Logout Successful')
  }


  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container py-3 flex items-center justify-between">

        <ul>
          <li>
            <Link href='/' className="text-3xl font-bold text-black">Exclusive</Link>
          </li>
        </ul>



        <ul className="flex space-x-5 items-center">
          <li><Link href="/" className="text-black  font-semibold">Home</Link></li>
          <li><Link href="/contact" className="text-black  font-semibold">Contact</Link></li>
          <li><Link href="/about" className="text-black  font-semibold">About</Link></li>




          {!isAuthenticated && <>
            <li><Link href="/login" className="text-black  font-semibold">login</Link></li>

            <li><Link href="/Register" className="text-black font-semibold">Register</Link></li>
          </>}


          {isAuthenticated && <>
            <li>
              <span onClick={handleLogout} className="cursor-pointer text-black font-semibold">Log out</span>
            </li>
            <li>
              <Link href="/allorders?defult=true" className="text-black font-semibold">All Orders
              </Link>
            </li>
          </>}


          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-gray-100 py-1 px-2 rounded-full ">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setShowSuggestions(true)} // لما المستخدم يضغط على الـ input
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // لما يخرج من الـ input
                placeholder="What are you looking for?"
                className="outline-none placeholder:text-sm mx-1"
              />

              {showSuggestions && (
                <div className="absolute top-full w-full bg-white/95 border mt-1 max-h-100 overflow-y-auto z-50 shadow-lg rounded backdrop-blur-sm">
                  {searchTerm.trim() === "" ? (
                    <div className="p-2 text-gray-500">Start typing to see suggestions...</div>
                  ) : filteredProducts.length === 0 ? (
                    <div className="p-2 text-gray-500">No suggestions found</div>
                  ) : (
                    <div className="max-h-100 overflow-y-auto">
                      {filteredProducts.slice(0, 7).map((product) => (
                        <div
                          key={product.id}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                         
                          onMouseDown={() => {
                            setShowSuggestions(false);
                            setSearchTerm(product.title);
                            router.push(`/productDetails/${product.id}`);
                          }}

                        >
                          <span className="text-sm">{product.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}















              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {isAuthenticated && <>
              <Link href="/cart">
                <Button className="relative p-2 rounded-full hover:bg-gray-200" variant="ghost" >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 right-0 translate-x-1/2 flex items-center justify-center text-[10px] font-bold text-white h-4 w-4 bg-black rounded-full">
                    {cartCount || initialCartcount}
                  </span>


                </Button>
              </Link>

            </>}


          </div>

        </ul>
      </div>
    </nav>


  )
}
