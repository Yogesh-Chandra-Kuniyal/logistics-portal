const SearchBar = ({ value, onChange }) => {

    return (

        <input
            type="text"
            placeholder="Search AWB / Customer..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border rounded-lg px-4 py-2 w-72"
        />

    );

};

export default SearchBar;