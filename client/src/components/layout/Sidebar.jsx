import { useState } from "react";
import { Menu, ChevronLeft } from "lucide-react";
import sidebarItems from "../../constants/sidebar";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-gray-900 text-white h-screen transition-all duration-300
      ${
        collapsed ? "w-20" : "w-72"
      }`}
    >
      {/* Logo */}

      <div className="flex items-center justify-between p-5 border-b border-gray-700">

        {!collapsed && (
          <div>

            <h1 className="text-xl font-bold">
              LOGISTICS
            </h1>

            <p className="text-sm text-gray-400">
              Admin Portal
            </p>

          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-gray-700"
        >
          {collapsed ? (
            <Menu size={20} />
          ) : (
            <ChevronLeft size={20} />
          )}
        </button>
      </div>

      {/* Navigation */}

      <nav className="p-4 flex flex-col gap-2">

        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.title}
            item={item}
            collapsed={collapsed}
          />
        ))}

      </nav>
    </aside>
  );
};

export default Sidebar;