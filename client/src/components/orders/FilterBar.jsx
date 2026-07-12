const FilterBar = ({ value, onChange }) => {

    return (

        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border rounded-lg px-4 py-2"
        >

            <option value="">All Status</option>

            <option>Pending Pickup</option>

            <option>Manifested</option>

            <option>Picked Up</option>

            <option>In Transit</option>

            <option>Out For Delivery</option>

            <option>Delivered</option>

            <option>Cancelled</option>

            <option>RTO</option>

        </select>

    );

};

export default FilterBar;