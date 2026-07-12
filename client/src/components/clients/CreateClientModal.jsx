import { useState } from "react";

const CreateClientModal = ({ open, onClose, onSubmit }) => {

    const [form, setForm] = useState({

        companyName: "",

        ownerName: "",

        phone: "",

        email: "",

        address: ""

    });

    if (!open) return null;

    const handleChange = (e)=>{

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    return (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

            <div className="bg-white p-6 rounded-xl w-[500px]">

                <h2 className="text-xl font-bold mb-5">
                    Create Client
                </h2>

                <div className="space-y-3">

                    <input
                        name="companyName"
                        placeholder="Company Name"
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <input
                        name="ownerName"
                        placeholder="Owner Name"
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <input
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <input
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <textarea
                        name="address"
                        placeholder="Address"
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                </div>

                <div className="flex justify-end gap-3 mt-5">

                    <button
                        onClick={onClose}
                        className="border px-4 py-2 rounded"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={()=>onSubmit(form)}
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Save
                    </button>

                </div>

            </div>

        </div>

    );

};

export default CreateClientModal;