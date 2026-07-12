import {
    Users,
    BadgeCheck,
    Wallet,
    Clock,
} from "lucide-react";

const ClientStats = ({ clients }) => {

    const total = clients.length;

    const approved = clients.filter(
        c => c.status === "Approved"
    ).length;

    const pending = clients.filter(
        c => !c.kycVerified
    ).length;

    const wallet = clients.reduce(
        (sum, c) => sum + (c.walletBalance || 0),
        0
    );

    const cards = [

        {
            title: "Total Clients",
            value: total,
            icon: Users,
            color: "bg-blue-500",
        },

        {
            title: "Approved",
            value: approved,
            icon: BadgeCheck,
            color: "bg-green-500",
        },

        {
            title: "Pending KYC",
            value: pending,
            icon: Clock,
            color: "bg-yellow-500",
        },

        {
            title: "Wallet Balance",
            value: `₹${wallet}`,
            icon: Wallet,
            color: "bg-purple-500",
        }

    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

            {cards.map(card => {

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
                            <Icon size={28}/>
                        </div>

                    </div>

                );

            })}

        </div>

    );

};

export default ClientStats;