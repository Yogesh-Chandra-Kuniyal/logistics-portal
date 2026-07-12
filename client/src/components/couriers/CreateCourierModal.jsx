import { useState } from "react";

const CreateCourierModal = ({ open, onClose, onSubmit }) => {

    const [form, setForm] = useState({

        courierName: "",

        trackingUrl: "",

        apiAvailable: false,

    });

    if (!open) return null;

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setForm({

            ...form,

            [name]: type === "checkbox" ? checked : value,

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit(form);

    };

    return (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl w-[500px] p-6">

                <h2 className="text-xl font-bold mb-6">

                    Add Courier

                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        name="courierName"
                        placeholder="Courier Name"
                        className="border rounded-lg w-full p-3"
                        onChange={handleChange}
                    />

                    <input
                        name="trackingUrl"
                        placeholder="Tracking URL"
                        className="border rounded-lg w-full p-3"
                        onChange={handleChange}
                    />

                    <label className="flex gap-3">

                        <input
                            type="checkbox"
                            name="apiAvailable"
                            onChange={handleChange}
                        />

                        API Available

                    </label>

                    <div className="flex justify-end gap-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded-lg"
                        >

                            Cancel

                        </button>

                        <button
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                        >

                            Save

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

};

export default CreateCourierModal;