import { useState, useEffect } from "react";

import { getClients } from "../../services/clientService";
import { getCouriers } from "../../services/courierService";
import { getWarehouses } from "../../services/warehouseService";

const OrderForm = ({ onSubmit, onCancel }) => {

    const [clients, setClients] = useState([]);
    const [couriers, setCouriers] = useState([]);
    const [warehouses, setWarehouses] = useState([]);

    const [form, setForm] = useState({
        customerName: "",
        customerPhone: "",
        pickupAddress: "",
        deliveryAddress: "",
        paymentMode: "Prepaid",
        codAmount: 0,
        shippingCharge: 0,
        weight: "",
        client: "",
        courier: "",
        warehouse: "",
    });

    useEffect(() => {
        loadDropdownData();
    }, []);

    const loadDropdownData = async () => {
        try {

            const [clientRes, courierRes, warehouseRes] =
                await Promise.all([
                    getClients(),
                    getCouriers(),
                    getWarehouses(),
                ]);

            setClients(clientRes.data);
            setCouriers(courierRes.data);
            setWarehouses(warehouseRes.data);

        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };

    const submitHandler = (e) => {

        e.preventDefault();

        onSubmit(form);

    };

    return (

        <form
            onSubmit={submitHandler}
            className="grid grid-cols-2 gap-5"
        >

            <input
                name="customerName"
                placeholder="Customer Name"
                className="border rounded-lg p-3"
                onChange={handleChange}
                value={form.customerName}
                required
            />

            <input
                name="customerPhone"
                placeholder="Customer Phone"
                className="border rounded-lg p-3"
                onChange={handleChange}
                value={form.customerPhone}
                required
            />

            <textarea
                name="pickupAddress"
                placeholder="Pickup Address"
                className="border rounded-lg p-3"
                onChange={handleChange}
                value={form.pickupAddress}
                required
            />

            <textarea
                name="deliveryAddress"
                placeholder="Delivery Address"
                className="border rounded-lg p-3"
                onChange={handleChange}
                value={form.deliveryAddress}
                required
            />

            <input
                type="number"
                name="weight"
                placeholder="Weight (Kg)"
                className="border rounded-lg p-3"
                onChange={handleChange}
                value={form.weight}
                required
            />

            <input
                type="number"
                name="shippingCharge"
                placeholder="Shipping Charge"
                className="border rounded-lg p-3"
                onChange={handleChange}
                value={form.shippingCharge}
            />

            <select
                name="paymentMode"
                className="border rounded-lg p-3"
                value={form.paymentMode}
                onChange={handleChange}
            >
                <option value="Prepaid">Prepaid</option>
                <option value="COD">COD</option>
            </select>

            {form.paymentMode === "COD" && (
                <input
                    type="number"
                    name="codAmount"
                    placeholder="COD Amount"
                    className="border rounded-lg p-3"
                    onChange={handleChange}
                    value={form.codAmount}
                />
            )}

            <select
                name="client"
                value={form.client}
                onChange={handleChange}
                className="border rounded-lg p-3"
                required
            >
                <option value="">Select Client</option>

                {clients.map((client) => (
                    <option
                        key={client._id}
                        value={client._id}
                    >
                        {client.companyName}
                    </option>
                ))}
            </select>

            <select
                name="courier"
                value={form.courier}
                onChange={handleChange}
                className="border rounded-lg p-3"
                required
            >
                <option value="">Select Courier</option>

                {couriers.map((courier) => (
                    <option
                        key={courier._id}
                        value={courier._id}
                    >
                        {courier.courierName}
                    </option>
                ))}
            </select>

            <select
                name="warehouse"
                value={form.warehouse}
                onChange={handleChange}
                className="border rounded-lg p-3"
                required
            >
                <option value="">Select Warehouse</option>

                {warehouses.map((warehouse) => (
                    <option
                        key={warehouse._id}
                        value={warehouse._id}
                    >
                        {warehouse.warehouseName}
                    </option>
                ))}
            </select>

            <div className="col-span-2 flex justify-end gap-4">

                <button
                    type="button"
                    onClick={onCancel}
                    className="border rounded-lg px-5 py-2"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="bg-blue-600 text-white rounded-lg px-6 py-2"
                >
                    Create Order
                </button>

            </div>

        </form>

    );

};

export default OrderForm;