"use client";
import React from "react";
import { useForm } from "react-hook-form";

interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  address: string;
}

function RegisterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUser>();

  const onSubmit = (data: IUser) => {
    console.log(data);
  };

  return (
    <section className="my-12 flex justify-center items-center">
      <div className="w-[30rem] h-[30rem] border-2 rounded-lg shadow-lg">
        <div className="flex flex-col items-center py-6">
          <h1 className="text-xl">Login to Application</h1>
        </div>
        <div className="flex flex-col px-6">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center items-center space-x-3">
              <label>FirstName</label>
              <input
                {...register("firstname", { required: "First Name required" })}
                className="w-[16rem] h-[3rem] border-2 rounded-lg p-2"
                placeholder="FirstName..."
              />
            </div>
            <div className="flex justify-center items-center">
              {errors.firstname && (
                <p className="text-red-500">{errors.firstname.message} </p>
              )}
            </div>

            <div className="flex justify-center items-center space-x-3">
              <label>LastName</label>
              <input
                {...register("lastname")}
                className="w-[16rem] h-[3rem] border-2 rounded-lg p-2"
                placeholder="LastName..."
              />
            </div>

            <div className="flex justify-center items-center space-x-3">
              <label>Email ID</label>
              <input
                {...register("email")}
                className="w-[16rem] h-[3rem] border-2 rounded-lg p-2"
                placeholder="Email ID..."
              />
            </div>

            <div className="flex justify-center items-center space-x-3">
              <label>Address</label>
              <input
                {...register("address")}
                className="w-[16rem] h-[3rem] border-2 rounded-lg p-2"
                placeholder="Address..."
              />
            </div>
            <div className="flex justify-center items-center my-6">
              <button
                type="submit"
                className="w-[12rem] h-[3rem] bg-blue-600 text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterForm;
