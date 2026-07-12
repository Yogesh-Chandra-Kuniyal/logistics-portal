import { NavLink } from "react-router-dom";

const SidebarItem = ({ item, collapsed }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
        ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white"
        }`
      }
    >
      <Icon size={20} />

      {!collapsed && (
        <span className="font-medium">
          {item.title}
        </span>
      )}
    </NavLink>
  );
};

export default SidebarItem;