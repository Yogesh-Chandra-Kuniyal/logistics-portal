import {
    Pencil,
    Trash2,
    CheckCircle,
    XCircle,
} from "lucide-react";

const CourierRow = ({ courier, onDelete }) => {

    return (

        <tr className="border-b hover:bg-gray-50">

            <td className="p-4 font-medium">

                {courier.courierName}

            </td>

            <td className="p-4">

                {

                    courier.apiAvailable ?

                    (

                        <span className="text-green-600 flex items-center gap-2">

                            <CheckCircle size={16}/>

                            Available

                        </span>

                    )

                    :

                    (

                        <span className="text-red-600 flex items-center gap-2">

                            <XCircle size={16}/>

                            Not Available

                        </span>

                    )

                }

            </td>

            <td className="p-4">

                <a

                    href={courier.trackingUrl}

                    target="_blank"

                    rel="noreferrer"

                    className="text-blue-600 hover:underline"

                >

                    Track

                </a>

            </td>

            <td className="p-4">

                <div className="flex gap-3">

                    <button>

                        <Pencil
                            size={18}
                            className="text-blue-600"
                        />

                    </button>

                    <button
                        onClick={() => onDelete(courier._id)}
                    >

                        <Trash2
                            size={18}
                            className="text-red-600"
                        />

                    </button>

                </div>

            </td>

        </tr>

    );

};

export default CourierRow;