import { Search } from "lucide-react";

const SearchClient = ({ value, onChange }) => {

    return (

        <div className="relative">

            <Search
                size={18}
                className="absolute left-3 top-3 text-gray-500"
            />

            <input
                type="text"
                placeholder="Search Client..."
                value={value}
                onChange={(e)=>onChange(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg w-80"
            />

        </div>

    );

};

export default SearchClient;