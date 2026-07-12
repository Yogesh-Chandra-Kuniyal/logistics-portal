import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import SearchBar from "../components/orders/SearchBar";
import FilterBar from "../components/orders/FilterBar";
import OrdersTable from "../components/orders/OrdersTable";
import CreateOrderModal from "../components/orders/CreateOrderModal";

import {
    getOrders,
    createOrder,
} from "../services/orderService";

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {

        try {

            setLoading(true);

            const res = await getOrders({
                search,
                status,
            });

            setOrders(res.data || []);

        } catch (err) {

            console.error(err);

        } finally {

            setLoading(false);

        }

    };

    const handleCreateOrder = async (data) => {

        try {

            await createOrder(data);

            setOpenModal(false);

            loadOrders();

        } catch (err) {

            console.error(err);

        }

    };

    const handleSearch = (value) => {

        setSearch(value);

    };

    const handleStatus = (value) => {

        setStatus(value);

    };

    useEffect(() => {

        loadOrders();

    }, [search, status]);

    if (loading) {

        return (

            <div className="flex justify-center items-center h-[70vh]">

                <h2 className="text-xl font-semibold">
                    Loading Orders...
                </h2>

            </div>

        );

    }

    return (

        <div className="space-y-6">

            {/* Header */}

            <div className="flex justify-between items-center">

                <div>

                    <h1 className="text-3xl font-bold">
                        Orders
                    </h1>

                    <p className="text-gray-500">
                        Manage all shipment orders
                    </p>

                </div>

                <button
                    onClick={() => setOpenModal(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2"
                >

                    <Plus size={18} />

                    Create Order

                </button>

            </div>

            {/* Search + Filter */}

            <div className="flex flex-col md:flex-row gap-4">

                <SearchBar
                    value={search}
                    onChange={handleSearch}
                />

                <FilterBar
                    value={status}
                    onChange={handleStatus}
                />

            </div>

            {/* Orders Table */}

            <OrdersTable
                orders={orders}
            />

            {/* Create Order Modal */}

            <CreateOrderModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                onSubmit={handleCreateOrder}
            />

        </div>

    );

};

export default Orders;