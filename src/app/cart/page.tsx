import { getUserCart } from '@/_service/cart.service';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { typeCartResponse, typeItems } from '@/types/cart.types';
import Link from 'next/link';
import ChangeCountBtn from './ChangeCount';
import ClearCartBtn from './clearCartBtn';
import RemoveItemBtn from './removeItemBtn';




export default async function Cartpage() {

  async function handlegetUserCart(): Promise<typeCartResponse> {

    const res = await getUserCart();
    return res;


  }
  const { numOfCartItems, products, totalCartPrice } = await handlegetUserCart();
  console.log("products", products);
  return (
    <div>
      {products.length === 0 && (
        <div className="text-center text-gray-500 text-xl py-10">
          Your cart is empty
        </div>
      )}

      {products.length > 0 && (
        <div>


          <div className='w-full flex justify-between'>
            <div>
              <h1>User will pay {totalCartPrice}LE</h1>
              <h2>Number of item:{numOfCartItems}</h2>
            </div>

            <div className='flex gap-3'>
              <Link href='/cart/Payment'>
                <Button className='cursor-pointer'>pay</Button>

              </Link>


              <ClearCartBtn />
            </div>
          </div>

          <div className="w-2xl mx-auto">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2">Invoice</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Count</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((Item: typeItems) =>
                  <TableRow key={Item.product.id}>
                    <TableCell className="font-medium">
                      <div>
                        <img src={Item.product.imageCover} alt={Item.product.title} className='w-full max-w-[250px] max-h-52' />
                        <h2 className=''>{Item.product.title}</h2>
                      </div>
                    </TableCell>
                    <TableCell>{Item.price}</TableCell>
                    <TableCell>{Item.count}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex flex-col items-center gap-2 w-[120px]">
                        <div className="flex items-center justify-between w-full ">
                          <ChangeCountBtn
                            isIncrement
                            id={Item.product.id}
                            newCount={Item.count + 1}
                          />
                          <Input
                            className="w-8 h-8 text-center border border-gray-300 rounded-md"
                            value={Item.count}
                            readOnly
                          />
                          <ChangeCountBtn
                            id={Item.product.id}
                            newCount={Item.count - 1}
                          />
                        </div>

                        <RemoveItemBtn id={Item.product.id} className="w-full" />
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  )

}
