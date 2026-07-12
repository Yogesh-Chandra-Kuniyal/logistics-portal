import ClientRow from "./ClientRow";

const ClientTable = ({ clients }) => {

    return (

        <div className="bg-white rounded-xl shadow">

            <table className="w-full">

                <thead className="bg-gray-100">


                    <tr>

                        <th className="p-3 text-left">Company</th>

                        <th className="p-3 text-left">Owner</th>

                        <th className="p-3 text-left">Phone</th>

                        <th className="p-3 text-left">Email</th>

                        <th className="p-3 text-left">Wallet</th>

                        <th className="p-3 text-left">KYC</th>

                        <th className="p-3 text-left">Status</th>
                        
                        <th className="p-3" >Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {clients.map(client => (

                        <ClientRow
                            key={client._id}
                            client={client}
                        />

                    ))}

                </tbody>

            </table>

        </div>

    );

};

export default ClientTable;