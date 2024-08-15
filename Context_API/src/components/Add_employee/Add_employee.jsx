import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmployeeContext from "../../context/EmployeeContext";

function Add_employee() {
  const {
    empName,
    setEmpName,
    line1,
    setLine1,
    city,
    setCity,
    country,
    setCountry,
    zip,
    setZip,
    email,
    setEmail,
    phoneno,
    setPhoneNo,
  } = useContext(EmployeeContext);

  // hook
  const navigate = useNavigate();

  const submitHandler = () => {

    navigate("/demo");
  };

  return (
    <div className="w-[60%] mx-auto mt-5  flex flex-col justify-center items-center border-2">
      <h1 className="flex justify-center items-center text-3xl font-bold underline">
        Employees Managemnet(CRUD)
      </h1>

      <div className="w-full flex  font-semibold my-7 px-8">
        <div className="w-full flex flex-col gap-4">
          <p className="text-xl">Add Employee</p>
          <div className="flex gap-4 border p-4">
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => setEmpName(e.target.value)}
              type="text"
              placeholder="Add employee"
              className="w-full border"
            />
          </div>

          <div className="w-full flex flex-col gap-4">
            <label htmlFor="address" className="text-xl">
              Address
            </label>
            <div className="flex justify-between gap-4 border p-4">
              <div className="flex gap-3">
                <label htmlFor="line1">Line1</label>
                <input
                  onChange={(e) => setLine1(e.target.value)}
                  type="text"
                  placeholder="line1"
                  className="w-full border"
                />
              </div>
              <div className="flex gap-3">
                <label htmlFor="city">City</label>
                <input
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  placeholder="city"
                  className="w-full border"
                />
              </div>
            </div>
            <div className="flex justify-between gap-4 border p-4">
              <div className="flex gap-3">
                <label htmlFor="country">Country</label>
                <input
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="country"
                  className="w-full border"
                />
              </div>
              <div className="flex gap-3">
                <label htmlFor="zip">Zip</label>
                <input
                  onChange={(e) => setZip(e.target.value)}
                  type="text"
                  placeholder="zip"
                  className="w-full border"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <label htmlFor="contacts" className="text-xl">
              Contacts
            </label>
            <div className="flex justify-between gap-4 border p-4">
              <div className="flex gap-3">
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="email"
                  className="w-full border"
                />
              </div>
              <div className="flex gap-3">
                <label htmlFor="contact">Contact(Phone)</label>
                <input
                  onChange={(e) => setPhoneNo(e.target.value)}
                  type="text"
                  placeholder="number"
                  className="w-full border"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-500 text-white px-4 py-1 m-4 rounded-md">
        <button onClick={submitHandler}>Add Employee</button>
      </div>
    </div>
  );
}

export default Add_employee;
