// "use client";

// import { getAllProducts } from "@/_service/Products.Service";
// import { ProductType } from "@/app/_interfaces/products";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function Searchbar() {
//     const router = useRouter();
//     const [allProducts, setAllProducts] = useState<ProductType[]>([]);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [showDropdown, setShowDropdown] = useState(false);

//     useEffect(() => {
//         async function fetchProducts() {
//             const Products = await getAllProducts();
//             setAllProducts(Products || []);
//         }
//         fetchProducts();
//     }, []);

//     const filteredProducts = allProducts.filter((product) =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     console.log("searchTerm:", searchTerm);
//     console.log("allProducts length:", allProducts.length);
//     console.log("filteredProducts:", filteredProducts);


//     return (
//         <div className="relative w-64">
//             <input
//                 type="text"
//                 placeholder="Search products..."
//                 className="w-full border rounded px-3 py-2 bg-red-500 text-white focus:outline-none"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 onFocus={() => setShowDropdown(true)}
//                 onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
//             />

//             {showDropdown && searchTerm && filteredProducts.length > 0 && (
//                 <div className="absolute top-full left-0 w-full bg-red-500 border mt-1 max-h-100 overflow-y-auto z-50 shadow-lg rounded">
//                     {filteredProducts.slice(0, 7).map((product) => (
//                         <div
//                             key={product.id}
//                             className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
//                             onMouseDown={() => router.push(`/productDetalis?id=${product.id}`)}
//                         >
//                             {product.title}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }
