import CourierRow from "./CourierRow";

const CourierTable = ({ couriers, onDelete }) => {

    return (

        <div className="bg-white rounded-xl shadow overflow-hidden">

            <table className="w-full">

                <thead className="bg-gray-100">

                    <tr>

                        <th className="p-4 text-left">Courier</th>

                        <th className="p-4 text-left">API</th>

                        <th className="p-4 text-left">Tracking URL</th>

                        <th className="p-4 text-left">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        couriers.length === 0 ?

                        (

                            <tr>

                                <td
                                    colSpan={4}
                                    className="text-center p-8"
                                >

                                    No Couriers Found

                                </td>

                            </tr>

                        )

                        :

                        (

                            couriers.map(courier => (

                                <CourierRow
                                    key={courier._id}
                                    courier={courier}
                                    onDelete={onDelete}
                                />

                            ))

                        )

                    }

                </tbody>

            </table>

        </div>

    );

};

export default CourierTable;