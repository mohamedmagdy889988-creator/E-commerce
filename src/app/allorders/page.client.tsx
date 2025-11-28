'use client";'
type Props = { orders: OrderType[] };

export default function OrdersClient({ orders }: Props) {
    if (!orders.length)
        return
    <div>No orders found.</div>;

    return (
        <div className="space-y-8">
            {orders.map((order) => (
                <div key={order._id} className="border rounded-lg p-6 shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <p className="font-semibold">Order ID: {order._id}</p>
                        <p className="font-semibold text-lg">
                            Total: {order.totalOrderPrice} EGP
                        </p>
                    </div>

                    <p>Status: {order.isPaid ? "Paid" : "Not Paid"} | Delivery: {order.isDelivered ? "Delivered" : "Pending"}</p>
                    <p>Payment Method: {order.paymentMethodType}</p>

                    <h3 className="font-semibold mt-4 mb-2">Products:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {order.cartItems.map((item) => (
                            <div key={item._id} className="border rounded p-3 flex flex-col items-center">
                                <img src={item.product.imageCover} alt={item.product.title} className="w-32 h-32 object-cover mb-2 rounded" />
                                <p className="text-center font-medium">{item.product.title}</p>
                                <p>{item.count} pcs — {item.price} EGP</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="font-semibold mt-4">Shipping Address:</h3>
                    <p>{order.shippingAddress.details}, {order.shippingAddress.city}</p>
                    <p>Phone: {order.shippingAddress.phone}</p>
                </div>
            ))}
        </div>
    );
}