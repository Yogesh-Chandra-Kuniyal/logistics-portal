const StatusBadge = ({ status }) => {

    const colors = {
        Approved: "bg-green-100 text-green-700",
        Pending: "bg-yellow-100 text-yellow-700",
    };

    return (
        <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
                colors[status] || "bg-gray-100"
            }`}
        >
            {status}
        </span>
    );
};

export default StatusBadge;