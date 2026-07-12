import { Search } from "lucide-react";

const CourierSearch = ({ value, onChange }) => {

    return (

        <div className="relative">

            <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
            />

            <input

                value={value}

                onChange={(e) => onChange(e.target.value)}

                placeholder="Search Courier..."

                className="w-full border rounded-lg pl-10 pr-4 py-2"

            />

        </div>

    );

};

export default CourierSearch;