import { Eye, Pencil, Trash2 } from "lucide-react";
import StatusBadge from "./StatusBadge";

const OrderRow = ({ order }) => {
    return (
        <tr className="border-b hover:bg-gray-50 transition">

            <td className="p-4 font-medium">
                {order.awbNumber}
            </td>

            <td className="p-4">
                {order.orderId}
            </td>

            <td className="p-4">
                {order.customerName}
            </td>

            <td className="p-4">
                {order.customerPhone}
            </td>

            <td className="p-4">
                {order.paymentMode}
            </td>

            <td className="p-4">
                {order.weight} kg
            </td>

            <td className="p-4">
                <StatusBadge status={order.status} />
            </td>

            <td className="p-4 font-semibold">
                ₹{order.shippingCharge}
            </td>

            <td className="p-4">
                <div className="flex items-center gap-3">

                    <button
                        className="text-blue-600 hover:text-blue-800"
                        title="View"
                    >
                        <Eye size={18} />
                    </button>

                    <button
                        className="text-yellow-600 hover:text-yellow-800"
                        title="Edit"
                    >
                        <Pencil size={18} />
                    </button>

                    <button
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                    >
                        <Trash2 size={18} />
                    </button>

                </div>
            </td>

        </tr>
    );
};

export default OrderRow;