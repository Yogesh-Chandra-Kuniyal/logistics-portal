import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import CourierTable from "../components/couriers/CourierTable";
import CourierStats from "../components/couriers/CourierStats";
import CourierSearch from "../components/couriers/CourierSearch";
import CreateCourierModal from "../components/couriers/CreateCourierModal";

import {
    getCouriers,
    createCourier,
    deleteCourier,
} from "../services/courierService";

const Couriers = () => {

    const [couriers, setCouriers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        loadCouriers();
    }, []);

    const loadCouriers = async () => {
        try {
            const res = await getCouriers();
            setCouriers(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async (data) => {
        await createCourier(data);
        setOpenModal(false);
        loadCouriers();
    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this courier?")) return;

        await deleteCourier(id);

        loadCouriers();

    };

    const filtered = couriers.filter(c =>
        c.courierName.toLowerCase().includes(search.toLowerCase())
    );

    if (loading)
        return <div className="text-center mt-20">Loading...</div>;

    return (
        <div className="space-y-6">

            <div className="flex justify-between items-center">

                <div>

                    <h1 className="text-3xl font-bold">
                        Couriers
                    </h1>

                    <p className="text-gray-500">
                        Manage Courier Partners
                    </p>

                </div>

                <button
                    onClick={() => setOpenModal(true)}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg flex gap-2"
                >
                    <Plus size={18}/>
                    Add Courier
                </button>

            </div>

            <CourierStats couriers={couriers}/>

            <CourierSearch
                value={search}
                onChange={setSearch}
            />

            <CourierTable
                couriers={filtered}
                onDelete={handleDelete}
            />

            <CreateCourierModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                onSubmit={handleCreate}
            />

        </div>
    );
};

export default Couriers;