import {
    Bell,
    Search,
    ChevronDown,
} from "lucide-react";

const Navbar = () => {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">

            {/* Left */}

            <div className="flex items-center gap-5">

                <h1 className="text-2xl font-bold text-gray-800">
                    Dashboard
                </h1>

            </div>

            {/* Right */}

            <div className="flex items-center gap-5">

                {/* Search */}

                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-3 top-3 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-72 pl-10 pr-4 py-2 rounded-lg border outline-none focus:border-blue-500"
                    />

                </div>

                {/* Notification */}

                <button className="relative">

                    <Bell size={22} />

                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 text-xs flex justify-center items-center">
                        4
                    </span>

                </button>

                {/* Profile */}

                <div className="flex items-center gap-3 cursor-pointer">

                    <img
                        src="https://i.pravatar.cc/40"
                        alt=""
                        className="rounded-full"
                    />

                    <div>

                        <p className="font-semibold">
                            Yogesh
                        </p>

                        <p className="text-sm text-gray-500">
                            Administrator
                        </p>

                    </div>

                    <ChevronDown size={18} />

                </div>

            </div>

        </header>
    );
};

export default Navbar;