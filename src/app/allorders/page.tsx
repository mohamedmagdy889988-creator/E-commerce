
import { getAllUserOrders } from "@/../src/_service/order.service";
import { nextAuthConfig } from "@/next-auth/nextAuth.config";
import { getMyUserToken } from "@/utils/utils";
import { getServerSession } from "next-auth";
import { ISession } from "../_interfaces/session";
import OrdersClient from "./page.client";

export default async function AllOrdersPage() {
  const token = await getMyUserToken();

  const session: ISession | null = await getServerSession(nextAuthConfig)
  const userId = session?.user?.id || ''
  const ordersData = await getAllUserOrders(userId);
  console.log("userid", ordersData);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">All Your Orders</h1>
      <OrdersClient orders={[...(ordersData || [])].reverse()} />
    </div>
  );
}
