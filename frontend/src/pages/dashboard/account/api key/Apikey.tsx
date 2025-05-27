import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MoreVertical, Edit, Trash2 } from "lucide-react";

const Apikey = () => {
  const [showModal, setShowModal] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const data = [
    { name: "Item 1", value: "100", status: "Active" },
    { name: "Item 2", value: "200", status: "Inactive" },
    { name: "Item 3", value: "300", status: "Pending" },
  ];

  const handleEditClick = (index) => {
    setDropdownIndex(null); // hide dropdown
    setShowModal(true); // open modal
    // Optionally: setEditData(data[index]) for form prefilling
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <Button onClick={() => setShowModal(true)}>Add New</Button>
      </div>

      <Card>
        <CardContent className="overflow-x-auto p-0">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-left dark:text-black">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Value</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3 whitespace-nowrap">{item.name}</td>
                  <td className="p-3 whitespace-nowrap">{item.value}</td>
                  <td className="p-3 whitespace-nowrap">{item.status}</td>
                  <td className="relative p-3">
                    <button
                      onClick={() =>
                        setDropdownIndex(dropdownIndex === index ? null : index)
                      }
                    >
                      <MoreVertical size={18} />
                    </button>
                    {dropdownIndex === index && (
                      <div className="absolute right-0 z-10 mt-2 w-28 rounded border bg-white shadow-lg">
                        <button
                          className="flex w-full items-center gap-2 px-4 py-2 text-blue-500 hover:bg-gray-100"
                          onClick={() => handleEditClick(index)}
                        >
                          <Edit size={16} /> Edit
                        </button>
                        <button className="flex w-full items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100">
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="dark:bg-background fixed right-0 mt-10 w-full max-w-full overflow-auto rounded-none bg-white p-6 shadow-xl sm:max-w-md md:rounded-l-lg dark:text-white">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Add New Entry</h2>
          </div>
          <form className="space-y-4">
            <div>
              <label className="mb-1 block">Name</label>
              <input
                className="w-full rounded border px-3 py-2"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label className="mb-1 block">Value</label>
              <input
                className="w-full rounded border px-3 py-2"
                placeholder="Enter value"
              />
            </div>
            <div>
              <label className="mb-1 block">Status</label>
              <select className="w-full dark:bg-black  rounded border px-3 py-2">
                <option className="text-black dark:text-white">Active</option>
                <option className="text-black dark:text-white">Inactive</option>
                <option className="text-black dark:text-white">Pending</option>
              </select>
            </div>
            <Button className="w-full">Save</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Apikey;
