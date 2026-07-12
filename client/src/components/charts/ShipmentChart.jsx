import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";

const COLORS = [
    "#16a34a",
    "#2563eb",
    "#f59e0b",
    "#ef4444"
];

const ShipmentChart = ({ data = [] }) => {

    
    return (

        <div className="bg-white rounded-xl shadow-sm p-6">

            <h2 className="text-lg font-semibold mb-6">

                Shipment Status

            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="value"

                        nameKey="name"

                        outerRadius={100}

                    >

                        {

                            data.map((entry, index) => (

                                <Cell

                                    key={index}

                                    fill={COLORS[index % COLORS.length]}

                                />

                            ))

                        }

                    </Pie>

                    <Tooltip />

                    <Legend />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

};

export default ShipmentChart;