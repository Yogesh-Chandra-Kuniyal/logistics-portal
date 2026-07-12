import OrderRow from "./OrderRow";

const OrdersTable = ({ orders }) => {

    return (

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">

            <table className="w-full">

                <thead className="bg-gray-100">

                    <tr>

                        <th className="p-4 text-left">AWB</th>

                        <th className="p-4 text-left">Order ID</th>

                        <th className="p-4 text-left">Customer</th>

                        <th className="p-4 text-left">Phone</th>

                        <th className="p-4 text-left">Payment</th>

                        <th className="p-4 text-left">Weight</th>

                        <th className="p-4 text-left">Status</th>

                        <th className="p-4 text-left">Shipping Charge</th>

                        <th className="p-4 text-left">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {orders.length === 0 ? (

                        <tr>

                            <td
                                colSpan="9"
                                className="text-center p-8 text-gray-500"
                            >
                                No Orders Found
                            </td>

                        </tr>

                    ) : (

                        orders.map((order) => (

                            <OrderRow
                                key={order._id || order.orderId}
                                order={order}
                            />

                        ))

                    )}

                </tbody>

            </table>

        </div>

    );

};

export default OrdersTable;