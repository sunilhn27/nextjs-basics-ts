"use client";
import React, { useState } from "react";
import { users as initialUsers } from "@/app/(state-management)/usermanagement/_users"; // Adjust the import based on your file structure
import EditUserModal from "@/app/(state-management)/usermanagement/_components/EditUserModel";
import { User } from "@/types";

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleSave = (updatedUser: User) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Address</th>
            <th className="py-2">Preferences</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="py-2">{user.name}</td>
              <td className="py-2">{user.email}</td>
              <td className="py-2">
                {user.address.map((addr, index) => (
                  <div key={index}>
                    {addr.street}, {addr.city}, {addr.country}
                  </div>
                ))}
              </td>
              <td className="py-2">
                Theme: {user.preferences.theme} <br />
                Notifications: {user.preferences.notification ? "Yes" : "No"}
              </td>
              <td className="py-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => setSelectedUser(user)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <EditUserModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default UserTable;
