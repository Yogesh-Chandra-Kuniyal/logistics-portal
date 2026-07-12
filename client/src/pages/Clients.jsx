import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import SearchClient from "../components/clients/SearchClient";
import ClientTable from "../components/clients/ClientTable";
import CreateClientModal from "../components/clients/CreateClientModal";
import ClientStats from "../components/clients/ClientStats";

import {
    getClients,
    createClient,
} from "../services/clientService";

const Clients = () => {

    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);

    const loadClients = async () => {

        const res = await getClients({
            search,
        });

        setClients(res.data);

    };

    useEffect(() => {
        loadClients();
    }, [search]);

    const handleCreate = async (data) => {

        await createClient(data);

        setOpen(false);

        loadClients();

    };

    return (

        <div className="space-y-6">

            <div className="flex justify-between">

                <h1 className="text-3xl font-bold">
                    Clients
                </h1>

                <button
                    onClick={()=>setOpen(true)}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2"
                >
                    <Plus size={18}/>
                    Add Client
                </button>

            </div>

            <ClientStats clients={clients} />
            
            <SearchClient
                value={search}
                onChange={setSearch}
            />

            <ClientTable
                clients={clients}
            />

            <CreateClientModal
                open={open}
                onClose={()=>setOpen(false)}
                onSubmit={handleCreate}
            />

        </div>

    );

};

export default Clients;