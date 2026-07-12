const colors = {
    "Pending Pickup": "bg-yellow-100 text-yellow-700",
    "Manifested": "bg-indigo-100 text-indigo-700",
    "Picked Up": "bg-cyan-100 text-cyan-700",
    "In Transit": "bg-blue-100 text-blue-700",
    "Out For Delivery": "bg-orange-100 text-orange-700",
    "Delivered": "bg-green-100 text-green-700",
    "Cancelled": "bg-red-100 text-red-700",
    "RTO": "bg-red-200 text-red-800",
};

const StatusBadge = ({ status }) => {
    return (
        <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[status] || "bg-gray-100 text-gray-700"
                }`}
        >
            {status}
        </span>
    );
};

export default StatusBadge;