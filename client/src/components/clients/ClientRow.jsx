import StatusBadge from "./StatusBadge";
import {
    Pencil,
    Trash2,
    Eye,
} from "lucide-react";

const ClientRow = ({ client }) => {

    return (

        <tr className="border-b hover:bg-gray-50">

            <td className="p-3">
                {client.companyName}
            </td>

            <td className="p-3">
                {client.ownerName}
            </td>

            <td className="p-3">
                {client.phone}
            </td>

            <td className="p-3">
                {client.email}
            </td>

            <td className="p-3">
                ₹{client.walletBalance}
            </td>

            <td className="p-3">
                {client.kycVerified ? "✅" : "❌"}
            </td>

            <td className="p-3">
                <StatusBadge status={client.status} />
            </td>

            <td className="p-3">

                <div className="flex gap-2">

                    <button className="text-blue-600">
                        <Eye size={18} />
                    </button>

                    <button className="text-green-600">
                        <Pencil size={18} />
                    </button>

                    <button className="text-red-600">
                        <Trash2 size={18} />
                    </button>

                </div>

            </td>

        </tr>

    );

};

export default ClientRow;