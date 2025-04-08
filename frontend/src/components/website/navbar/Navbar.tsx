import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  FileText,
  Calendar,
  PenTool,
  Cpu,
  Repeat,
  ShoppingCart,
  Briefcase,
  Code,
  HelpCircle,
  Mail,
} from "lucide-react";
import { NavLink } from "react-router-dom";

// Define types for menu items
interface MenuItem {
  title: string;
  link?: string;
  items?: {
    name: string;
    icon: React.ComponentType<{ size: number }>;
    link: string;
  }[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      title: "Features",
      items: [
        { name: "Content", icon: FileText, link: "content" },
        { name: "Scheduling", icon: Calendar, link: "Scheduling" },
        { name: "Copywriting AI", icon: PenTool, link: "copywriting" },
        { name: "AI Assist", icon: Cpu, link: "ai-assist" },
        { name: "Automation", icon: Repeat, link: "automation" },
        { name: "E-commerce", icon: ShoppingCart, link: "e-commerce" },
        { name: "Professionals", icon: Briefcase, link: "professionals" },
        { name: "API", icon: Code, link: "api" },
      ],
    },
    { title: "Pricing", link: "pricing" },
    { title: "Integrations", link: "integrations" },
    { title: "Get Paid!", link: "getpaid" },
    {
      title: "Resources",
      items: [
        { name: "Help Center", icon: HelpCircle, link: "helpcenter" },
        { name: "Contact", icon: Mail, link: "contact" },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-md text-black w-screen fixed top-0 z-999">
      <div className="flex justify-between p-4 items-center mx-auto">
        {/* Logo */}
        <NavLink to={"/"} className="text-xl font-bold">
          <img src="/logo/ES_logo.png" alt="Logo" className="h-10 w-auto" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex relative space-x-12">
          {menuItems.map((menu) => (
            <NavLink
              to={menu.link || "/"} // fallback to root if link is undefined
              key={menu.title}
              className="cursor-pointer duration-300 group relative transition-colors"
              onClick={() => setDropdown(menu.items ? menu.title : null)}
              onMouseEnter={() => setDropdown(menu.items ? menu.title : null)}
              onMouseLeave={() => setDropdown(null)}
            >
              <div className="flex gap-1 items-center">
                {menu.title}
                {menu.items && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      dropdown === menu.title ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>
              {menu.items && dropdown === menu.title && (
                <ul className="bg-white border border-gray-200 rounded-md shadow-lg w-max absolute left-[-10px] top-full">
                  {menu.items.map((item) => (
                    <NavLink
                      to={item.link}
                      key={item.name}
                      className="flex duration-300 gap-2 hover:bg-gray-100 items-center px-4 py-2 transition-colors"
                    >
                      <item.icon size={16} />
                      {item.name}
                    </NavLink>
                  ))}
                </ul>
              )}
            </NavLink>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="border border-black rounded-md duration-300 hover:bg-gray-100 px-4 py-2 transition-colors">
            Login
          </button>
          <button className="bg-black rounded-md text-white duration-300 hover:bg-gray-800 px-4 py-2 transition-colors">
            Try Free
          </button>
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white border-gray-200 border-t lg:hidden">
          <ul className="flex flex-col p-4 space-y-4">
            {menuItems.map((menu) => (
              <li key={menu.title} className="cursor-pointer relative">
                <div
                  className="flex justify-between items-center"
                  onClick={() =>
                    setDropdown(dropdown === menu.title ? null : menu.title)
                  }
                >
                  {menu.title}
                  {menu.items && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        dropdown === menu.title ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
                {menu.items && dropdown === menu.title && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {menu.items.map((item) => (
                      <NavLink
                        to={item.link}
                        key={item.name}
                        className="flex gap-2 items-center py-1"
                      >
                        <item.icon size={16} />
                        {item.name}
                      </NavLink>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-col p-4 space-y-2">
            <button className="border border-black rounded-md duration-300 hover:bg-gray-100 px-4 py-2 transition-colors">
              Login
            </button>
            <button className="bg-black rounded-md text-white duration-300 hover:bg-gray-800 px-4 py-2 transition-colors">
              Try Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
