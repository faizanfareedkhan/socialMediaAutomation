import React, { useState } from "react";
import { Sun, Moon, Check, X } from "lucide-react";

const AppearenceCard: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [themeColor, setThemeColor] = useState("blue");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-600 hover:bg-blue-700",
    red: "bg-red-600 hover:bg-red-700",
    green: "bg-green-600 hover:bg-green-700",
    purple: "bg-purple-600 hover:bg-purple-700",
    yellow: "bg-yellow-600 hover:bg-yellow-700",
    orange: "bg-orange-600 hover:bg-orange-700",
    pink: "bg-pink-600 hover:bg-pink-700",
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleTheme = (mode: "light" | "dark") => {
    setTheme(mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  };

  const handleDeleteWorkspace = () => {
    // Perform workspace deletion logic here
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto mt-10 w-full space-y-6">
      {/* Card 1: Image Upload */}
      <div className="space-y-6 rounded-2xl bg-white p-6 shadow-lg dark:bg-background dark:text-white">
        <div>
          <h2 className="text-xl font-medium">Image</h2>
          <p className="text-xs text-gray-400 dark:text-gray-400">
            Choose an image to upload. You’ll see a preview on the left.
          </p>
          <div className="mt-4 w-full border-b border-gray-300 dark:border-gray-700"></div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-lg border bg-gray-100 dark:bg-background">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-sm text-gray-400">No image</span>
            )}
          </div>

          <div>
            <label
              className={`cursor-pointer rounded-lg px-4 py-2 text-white transition ${colorClasses[themeColor]}`}
            >
              Upload
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Card 2: Theme Toggle */}
      <div className="space-y-6 rounded-lg bg-white p-8 shadow-lg dark:bg-background dark:text-white">
        <div>
          <h2 className="text-xl font-medium">Theme mode</h2>
          <p className="text-xs text-gray-400 dark:text-gray-400">
            Select theme for the dashboard.
          </p>
          <div className="mt-4 w-full border-b border-gray-300 dark:border-gray-700"></div>
        </div>

        <div className="flex gap-4">
          {/* Light Theme Card */}
          <div
            className={`relative h-35 w-90 cursor-pointer overflow-hidden rounded-lg border-2 ${
              theme === "light" ? "border-gray-600" : "border-transparent"
            }`}
            onClick={() => toggleTheme("light")}
          >
            <img
              src="../../../../../public/dashboard/theme/light.webp"
              alt="Light Theme"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 flex w-full items-center justify-center gap-2 bg-white/60 py-2 text-xs text-black dark:bg-black/60 dark:text-white">
              <Sun size={14} />
              White Theme
            </div>
          </div>

          {/* Dark Theme Card */}
          <div
            className={`relative h-35 w-90 cursor-pointer overflow-hidden rounded-lg border-2 ${
              theme === "dark" ? "border-gray-600" : "border-transparent"
            }`}
            onClick={() => toggleTheme("dark")}
          >
            <img
              src="../../../../../public/dashboard/theme/dark.webp"
              alt="Dark Theme"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 flex w-full items-center justify-center gap-2 bg-white/60 py-2 text-xs text-black dark:bg-background dark:text-white">
              <Moon size={14} />
              Black Theme
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Basic Information */}
      <div className="space-y-6 rounded-2xl bg-white p-6 shadow-lg dark:bg-background dark:text-white">
        <div>
          <h2 className="text-xl font-medium">Basic Information</h2>
          <p className="text-xs text-gray-400 dark:text-gray-400">
            Enter the name of your workspace. This will be used across the
            dashboard.
          </p>
          <div className="mt-4 w-full border-b border-gray-300 dark:border-gray-700"></div>
        </div>

        <div>
          <label htmlFor="workspace-name" className="text-sm font-medium">
            Workspace Name
          </label>
          <input
            type="text"
            id="workspace-name"
            placeholder="Enter your workspace name"
            className="mt-2 w-full rounded-md border border-gray-300 p-2 text-sm dark:border-gray-700 dark:bg-background dark:text-white"
          />
        </div>
      </div>

      {/* Card 4: Theme Color */}
      <div className="space-y-6 rounded-2xl bg-white p-6 shadow-lg dark:bg-background dark:text-white">
        <div>
          <h2 className="text-xl font-medium">Theme Color</h2>
          <p className="text-xs text-gray-400 dark:text-gray-400">
            Choose a color theme. This will update the Upload button color.
          </p>
          <div className="mt-4 w-full border-b border-gray-300 dark:border-gray-700"></div>
        </div>

        <div className="flex gap-4">
          {["blue", "red", "green", "purple", "yellow", "orange", "pink"].map(
            (color) => (
              <button
                key={color}
                onClick={() => setThemeColor(color)}
                className={`relative h-6 w-6 rounded-full border-2 ${
                  themeColor === color
                    ? "border-gray-800 dark:border-white"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
              >
                {themeColor === color && (
                  <Check className="absolute top-1 left-1 h-4 w-4 text-white dark:text-black" />
                )}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Card 5: Danger Zone */}
      {/* Card 5: Danger Zone */}
      <div className="space-y-4 rounded-2xl bg-white p-6 shadow-lg dark:bg-background dark:text-white">
        <div>
          <h2 className="text-xl font-medium text-red-400">Danger Zone</h2>
          <p className="text-xs text-gray-400 dark:text-gray-400">
            Deleting your workspace is irreversible. Make sure to back up any
            important data before proceeding.
          </p>
          <div className="mt-4 w-full border-b border-gray-300 dark:border-gray-700"></div>
        </div>

        <div className="flex flex-col items-start space-y-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-md bg-red-300 px-4 py-1.5 text-sm text-white hover:bg-red-400"
          >
            Delete Workspace
          </button>
          <p className="text-xs text-gray-400 dark:text-gray-400">
          API workspace id: cm9jyjkz3000kn9w5mf6jx8zw
          </p>
        </div>
      </div>

      {/* Modal for Deleting Workspace */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl dark:bg-background dark:text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Delete Workspace</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-600 dark:text-white"
              >
                <X size={18} />
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Do you really want to delete this workspace? All users and posts
              within the workspace will be removed.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleDeleteWorkspace}
                className="w-full rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
              >
                Delete
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 dark:border-gray-600 dark:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppearenceCard;
