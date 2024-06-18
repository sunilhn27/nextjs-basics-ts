"use client";

import { useNestedUser } from "@/app/store/nestedStore";

function UpdateProfileForm() {
  const { user, updateAddress, updateCity, updateEmail, updateName, clearAll } =
    useNestedUser();

  return (
    <section className="my-12">
      <div className="flex justify-center items-center">
        <form className="space-y-3">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => updateName(e.target.value)}
              className="border-2 px-2 py-1 rounded-lg"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email "
              onChange={(e) => updateEmail(e.target.value)}
              className="border-2 px-2 py-1 rounded-lg"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              className="border-2 px-2 py-1 rounded-l g"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              className="border-2 px-2 py-1 rounded-lg"
            />
          </div>

          <button type="submit" className=" border-2 my-6 px-2 py-1 rounded-lg">
            Update
          </button>
        </form>
      </div>

      <div className="flex justify-center items-center mt-12">
        <div className="flex flex-col space-y-2">
          <h1 className="font-bold text-[1.5rem]">Updated User Data</h1>
          <h2>Name: {user.name}</h2>
          <h2>Email: {user.email}</h2>
          <h2>Address: {user.address.street}</h2>
          <h2>City: {user.address.city}</h2>
          <button
            className="mt-4 border-2 rounded-lg px-2 py-1"
            onClick={clearAll}
          >
            Clear State
          </button>
        </div>
      </div>
    </section>
  );
}

export default UpdateProfileForm;
