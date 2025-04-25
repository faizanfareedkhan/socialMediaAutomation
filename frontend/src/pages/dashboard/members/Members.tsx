import React, { useState } from "react";
import { X, UserPlus2 } from "lucide-react";

const Members: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Close modal when clicking outside
  const closeModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  return (
    <div className="dark:bg-background mx-8 mt-10 h-70 w-7xl rounded-lg border bg-white shadow-md dark:text-white">
      {/* Main Card */}
      <div className="flex items-center justify-between border-b border-gray-200 p-6">
        <div>
          <h2 className="text-xl font-semibold">Workspace Members (1)</h2>
          <p className="mt-1 text-sm text-gray-600">
            Manage users of this workspace.
          </p>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Invite Member
        </button>
      </div>

      {/* second Section Below */}
      <div className="flex items-center justify-between border-b border-gray-200 p-6">
        <div className="flex items-start space-x-4">
          {/* Avatar style "I" */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-gray-900 text-xl text-white">
            I
          </div>

          {/* Text content */}
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              Indigo Gopher{" "}
              <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-orange-500">
                you
              </span>
            </h3>
            <p className="mt-1 text-xs text-gray-400">
              saadatkhanbuk@gmail.com
            </p>
          </div>
        </div>

        <span className="text-sm font-medium text-gray-400">
          Workspace Owner
        </span>
      </div>

      {/* third section */}
      {/* third section */}
      <div className="mx-6 mt-6 flex items-start justify-between space-x-4">
        {/* Left side content */}
        <div className="flex items-start space-x-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-gray-900 text-xl text-white">
            S
          </div>
          <div>
            <h3 className="inline-block rounded bg-amber-100 px-5 py-1 text-xs font-medium text-orange-500">
              Invite sent
            </h3>
            <p className="mt-1 text-xs text-gray-400">
              saadatkhanbuk@gmail.com
            </p>
          </div>
        </div>

        {/* Right side dropdown */}
        <div className="flex flex-col mx-30 ">
          <select
            className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            defaultValue="Admin"
          >
            <option value="Admin">Admin</option>
            <option value="General">General</option>
            <option value="Client">Client</option>
          </select>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          onClick={closeModal}
          className="bg-opacity-40 absolute inset-0 z-50 flex items-center justify-center px-4"
        >
          <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg">
            {/* Close Icon */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header - Align left */}
            <div className="mb-6 flex flex-col items-start space-y-2">
              {/* Icon on the top */}
              <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                <UserPlus2 className="h-6 w-6" />
              </div>

              {/* Heading and Description below the icon */}
              <div>
                <h3 className="text-left text-xl font-semibold">
                  Invite Member
                </h3>
                <p className="mt-1 text-left text-sm text-gray-500">
                  Invite a new member to join this workspace. If user is already
                  registered, they will automatically be added.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Member Role
                </label>
                <select className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option>Admin</option>
                  <option>General</option>
                  <option>Client</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Members;
