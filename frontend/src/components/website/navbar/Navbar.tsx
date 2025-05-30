import { useState, useEffect } from "react";
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
  Sun,
  Moon,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import BtnPrimary from "@/components/common/BtnPrimary";
import BtnSecondary from "@/components/common/BtnSecondary";

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
  const [isDarkMode, setIsDarkMode] = useState(false);

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
  console.log(isDarkMode);
  useEffect(() => {
    const handleChangeTheme = (
      base: string,
      Contrast: string,
      brand: string,
    ) => {
      const html = document.documentElement;
      html.style.setProperty("--base-color", base);
      html.style.setProperty("--contrast-color", Contrast);
      html.style.setProperty("--brand-color", brand);
    };
    if (isDarkMode) {
      handleChangeTheme("black", "white", "green");
    } else {
      handleChangeTheme("white", "black", "green");
    }
  }, [isDarkMode]);

  return (
    <nav className="fixed top-0 z-999 w-screen bg-[var(--base-color)] text-[var(--contrast-color)]">
      <div className="mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <NavLink to={"/"} className="text-xl font-bold">
          <img src="/logo/ES_logo.png" alt="Logo" className="h-10 w-auto" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="relative hidden space-x-12 lg:flex">
          {menuItems.map((menu) => (
            <NavLink
              to={menu.link || "/"}
              key={menu.title}
              className="group relative cursor-pointer transition-colors duration-300"
              onClick={() => setDropdown(menu.items ? menu.title : null)}
              onMouseEnter={() => setDropdown(menu.items ? menu.title : null)}
              onMouseLeave={() => setDropdown(null)}
            >
              <div className="flex items-center gap-1">
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
                <ul className="absolute top-full left-[-10px] w-max rounded-md border bg-[var(--base-color)] shadow-lg">
                  {menu.items.map((item) => (
                    <NavLink
                      to={item.link}
                      key={item.name}
                      className="flex items-center gap-2 px-4 py-2 text-[var(--contrast-color)] transition-colors duration-300"
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

        {/* Theme Toggle and Buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="rounded-full p-2 transition-colors duration-300"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <Moon size={20} className="text-[var(--contrast-color)]" />
            ) : (
              <Sun size={20} className="text-[var(--contrast-color)]" />
            )}
          </button>

          <div className="flex items-center space-x-1">
            <Link to={"auth/login"}>
              <BtnPrimary className="rounded-md px-4 py-2" name="Login" />
            </Link>
            <Link to={"auth/login"}>
              <BtnSecondary className="rounded-md px-4 py-2" name="Try Free" />
            </Link>
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-[var(--base-color)] lg:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            {menuItems.map((menu) => (
              <li key={menu.title} className="relative cursor-pointer">
                <div
                  className="flex items-center justify-between"
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
                  <ul className="mt-2 ml-4 space-y-2">
                    {menu.items.map((item) => (
                      <NavLink
                        to={item.link}
                        key={item.name}
                        className="flex items-center gap-2 py-1 text-[var(--contrast-color)]"
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
          <div className="flex flex-col space-y-2 p-4">
            <button className="border-contrast rounded-md border px-4 py-2 transition-colors duration-300 hover:bg-[var(--contrast-color)] hover:text-[var(--base-color)]">
              Login
            </button>
            <button className="bg-contrast rounded-md px-4 py-2 text-[var(--contrast-color)] transition-colors duration-300 hover:opacity-90">
              Try Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
