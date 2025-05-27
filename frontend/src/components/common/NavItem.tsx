import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  to: string;
};

function NavItem({ children, to }: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "rounded-lg bg-gray-200 dark:text-black dark:hover:text-white" : "")}
    >
      {children}
    </NavLink>
  );
}

export default NavItem;
