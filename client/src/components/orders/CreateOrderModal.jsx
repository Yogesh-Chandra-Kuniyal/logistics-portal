import { use, useEffect, useState } from "react";

import { getClients } from "../../services/clientService";
import { getCouriers } from "../../services/courierService";
import { getWarehouses } from "../../services/warehouseService";
import OrderForm from "./OrderForm";



const CreateOrderModal = ({
    open,
    onClose,
    onSubmit,
}) => {

    const [clients, setClients] = useState([]);
    const [couriers, setCouriers] = useState([]);
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {

        if(open){
            loadData();
        }

    }, [open]);

    const loadData = async () => {

        try{

            const clientRes = await getClients();
            const courierRes = await getCouriers();
            const warehouseRes = await getWarehouses();

            setClients(clientRes.data);
            setCouriers(courierRes.data);
            setWarehouses(warehouseRes.data);

        }catch(err){
            console.error(err);
        }

    };

    if (!open) return null;

    return (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

            <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl">

                <div className="flex justify-between items-center p-5 border-b">

                    <h2 className="text-2xl font-semibold">
                        Create New Order
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-2xl"
                    >
                        ×
                    </button>

                </div>

                <div className="p-6">

                    <OrderForm
                        onSubmit={onSubmit}
                        onCancel={onClose}
                    />

                </div>

            </div>

        </div>

    );

};

export default CreateOrderModal;