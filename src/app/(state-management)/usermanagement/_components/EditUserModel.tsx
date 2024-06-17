import React, { useState } from "react";
import { User } from "@/types";

interface EditUserModalProps {
  user: User;
  onClose: () => void;
  onSave: (user: User) => void;
}

const EditUserModal: React.FC<EditUserModalProps> = ({
  user,
  onClose,
  onSave,
}) => {
  const [updatedUser, setUpdatedUser] = useState<User>(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newAddress = [...updatedUser.address];
    newAddress[index] = { ...newAddress[index], [name]: value };
    setUpdatedUser({ ...updatedUser, address: newAddress });
  };

  const handlePreferencesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    const newPreferences = {
      ...updatedUser.preferences,
      [name]: name === "notification" ? checked : value,
    };
    setUpdatedUser({ ...updatedUser, preferences: newPreferences });
  };

  const handleSubmit = () => {
    onSave(updatedUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={updatedUser.name}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={updatedUser.email}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </label>
        {updatedUser.address.map((addr, index) => (
          <div key={index}>
            <label className="block mb-2">
              Street:
              <input
                type="text"
                name="street"
                value={addr.street}
                onChange={(e) => handleAddressChange(e, index)}
                className="border p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              City:
              <input
                type="text"
                name="city"
                value={addr.city}
                onChange={(e) => handleAddressChange(e, index)}
                className="border p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Country:
              <input
                type="text"
                name="country"
                value={addr.country}
                onChange={(e) => handleAddressChange(e, index)}
                className="border p-2 w-full"
              />
            </label>
          </div>
        ))}
        <label className="block mb-2">
          Theme:
          <input
            type="text"
            name="theme"
            value={updatedUser.preferences.theme}
            onChange={handlePreferencesChange}
            className="border p-2 w-full"
          />
        </label>
        <label className="block mb-2">
          Notifications:
          <input
            type="checkbox"
            name="notification"
            checked={updatedUser.preferences.notification}
            onChange={handlePreferencesChange}
            className="border p-2 w-full"
          />
        </label>
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
