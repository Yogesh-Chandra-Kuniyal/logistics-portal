import {
    Truck,
    CheckCircle,
    XCircle,
} from "lucide-react";

const CourierStats = ({ couriers }) => {

    const total = couriers.length;

    const apiAvailable = couriers.filter(
        c => c.apiAvailable
    ).length;

    const apiUnavailable = total - apiAvailable;

    const cards = [

        {
            title: "Total Couriers",
            value: total,
            icon: Truck,
            color: "bg-blue-500",
        },

        {
            title: "API Available",
            value: apiAvailable,
            icon: CheckCircle,
            color: "bg-green-500",
        },

        {
            title: "No API",
            value: apiUnavailable,
            icon: XCircle,
            color: "bg-red-500",
        },

    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {

                cards.map(card => {

                    const Icon = card.icon;

                    return (

                        <div
                            key={card.title}
                            className="bg-white rounded-xl shadow p-5 flex justify-between items-center"
                        >

                            <div>

                                <p className="text-gray-500">

                                    {card.title}

                                </p>

                                <h2 className="text-2xl font-bold mt-2">

                                    {card.value}

                                </h2>

                            </div>

                            <div
                                className={`${card.color} p-3 rounded-lg text-white`}
                            >

                                <Icon size={26}/>

                            </div>

                        </div>

                    );

                })

            }

        </div>

    );

};

export default CourierStats;