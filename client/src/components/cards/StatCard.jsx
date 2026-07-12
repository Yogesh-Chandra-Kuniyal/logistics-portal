const StatCard = ({ title, value, growth, icon: Icon, color }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-5 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-gray-500 text-sm">{title}</p>

                    <h2 className="text-3xl font-bold mt-2">{value}</h2>

                    {growth !== undefined && (
                        <div className="mt-3">
                            <span
                                className={`inline-block px-2 py-1 rounded-full text-sm font-medium ${Number(growth) >= 0
                                        ? "bg-green-100 text-green-600"
                                        : "bg-red-100 text-red-600"
                                    }`}
                            >
                                {growth > 0 ? "+" : ""}
                                {growth}%
                            </span>
                        </div>
                    )}
                </div>

                <div
                    className={`${color || "bg-gray-500"
                        } h-14 w-14 rounded-xl flex items-center justify-center text-white`}
                >
                    {Icon && <Icon size={28} />}
                </div>
            </div>
        </div>
    );
};

export default StatCard;