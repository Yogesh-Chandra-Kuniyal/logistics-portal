const RecentOrders = ({ orders = [] }) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">

            <h2 className="text-lg font-semibold mb-4">
                Recent Orders
            </h2>

            <table className="w-full">

                <thead>

                    <tr className="text-left border-b">

                        <th className="py-2">AWB</th>

                        <th className="py-2">Customer</th>

                        <th className="py-2">Status</th>

                        <th className="py-2">Amount</th>

                    </tr>

                </thead>

                <tbody>

                    {orders.length > 0 ? (
                        orders.map((order) => (

                            <tr
                                key={order._id}
                                className="border-b h-12"
                            >

                                <td>{order.awbNumber}</td>

                                <td>{order.customerName}</td>

                                <td>{order.status}</td>

                                <td>₹{order.shippingCharge}</td>

                            </tr>

                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="4"
                                className="text-center py-6 text-gray-500"
                            >
                                No Recent Orders
                            </td>
                        </tr>
                    )}

                </tbody>

            </table>

        </div>
    );
};

export default RecentOrders;