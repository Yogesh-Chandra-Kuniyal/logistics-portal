import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ page }) => {
    return (
        <div className="flex items-center text-sm text-gray-500 gap-2">

            <span>Dashboard</span>

            <ChevronRight size={16} />

            <span className="font-medium text-gray-800">
                {page}
            </span>

        </div>
    );
};

export default Breadcrumb;