

import React, { useState } from "react";
import UnSplash from '@/pages/dashboard/postContent/createPost/sheet/UnSplash';

type SidebarMenuItem = {
  key: string;
  label: string;
  iconUrl: string;
  disabled?: boolean;
};

const sidebarMenuItems: SidebarMenuItem[] = [
  {
    key: "media-library",
    label: "Media Library",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/709/709586.png",
  },
  {
    key: "unsplash",
    label: "Unsplash",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/873/873120.png",
  },
  {
    key: "ai-art",
    label: "AI Art",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/882/882704.png",
  },
  {
    key: "giphy",
    label: "Giphy",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
  },
  {
    key: "pexels",
    label: "Pexels",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
  },
  {
    key: "pixabay",
    label: "Pixabay",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1384/1384062.png",
  },
  {
    key: "dropbox",
    label: "Dropbox",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/888/888847.png",
    disabled: true,
  },
  {
    key: "google-drive",
    label: "Google Drive",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/270/270798.png",
    disabled: true,
  },
  {
    key: "box",
    label: "Box",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/888/888870.png",
    disabled: true,
  },
];

const SheetSideBar: React.FC = () => {
  const [sidebarSelectedKey, setSidebarSelectedKey] = useState<string>("media-library");

  const renderSidebarContent = (): React.ReactNode => {
    switch (sidebarSelectedKey) {
      case "media-library":
        return <div>Media Library content goes here...</div>;
      case "unsplash":
        return <div><UnSplash /></div>;
      case "ai-art":
        return <div>AI Art content goes here...</div>;
      case "giphy":
        return <div>Giphy content goes here...</div>;
      case "pexels":
        return <div>Pexels content goes here...</div>;
      case "pixabay":
        return <div>Pixabay content goes here...</div>;
      case "dropbox":
      case "google-drive":
      case "box":
        return (
          <div className="text-gray-400">
            {sidebarMenuItems.find((i) => i.key === sidebarSelectedKey)?.label} is currently disabled.
          </div>
        );
      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <div className="flex w-full gap-0 overflow-scroll overflow-x-hidden md:w-[85%] [&>button.absolute.right-4.top-4]:hidden" style={{ height: "100vh" }}>
      {/* Sidebar */}
      <nav className="flex w-44 flex-col border-r border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-[#0f172a]">
        {sidebarMenuItems.map(({ key, label, iconUrl, disabled }) => (
          <button
            key={key}
            className={`flex items-center gap-3 border-l-4 px-4 py-3 text-left text-sm font-medium
                ${
                  disabled
                    ? "cursor-not-allowed text-gray-400"
                    : "cursor-pointer text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#1e293b]"
                }
                ${
                  sidebarSelectedKey === key && !disabled
                    ? "border-blue-600 bg-blue-50 font-semibold text-blue-700 dark:bg-[#1e293b] dark:text-blue-400"
                    : "border-transparent"
                }
              `}
            disabled={disabled}
            onClick={() => !disabled && setSidebarSelectedKey(key)}
            type="button"
          >
            <img src={iconUrl} alt={`${label} icon`} className="h-5 w-5 flex-shrink-0" loading="lazy" />
            {label}
          </button>
        ))}
      </nav>

      {/* Content */}
      <section className="flex-1 overflow-auto p-6 text-gray-800 dark:text-gray-100">{renderSidebarContent()}</section>
    </div>
  );
};

export default SheetSideBar;
