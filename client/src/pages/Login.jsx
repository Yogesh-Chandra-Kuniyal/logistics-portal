import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import useAuth from "../hooks/useAuth";

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const submit = async (e) => {
        e.preventDefault();

        try {
            const res = await loginUser(form);

            login(res.user, res.token);

            navigate("/");
        } catch (err) {
            alert(err.response?.data?.message || "Login Failed");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <form
                onSubmit={submit}
                className="bg-white shadow-lg p-8 rounded-lg w-96"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Logistics Portal Login
                </h2>

                <input
                    className="border p-2 w-full mb-4"
                    type="email"
                    placeholder="Email"
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                />

                <input
                    className="border p-2 w-full mb-4"
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                    }
                />

                <button
                    className="bg-blue-600 text-white w-full py-2 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    );
}