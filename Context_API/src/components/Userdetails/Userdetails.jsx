import React, { useContext } from "react";
import EmployeeContext from "../../context/EmployeeContext";

function Userdetails() {
  const {
    empName,
    line1,
    city,
    country,
    zip,
    email,
    phoneNo,
  } = useContext(EmployeeContext);

  console.log(empName);
    console.log(line1);
    console.log(city);
    console.log(country);
    console.log(zip);
    console.log(email);
    console.log(phoneNo);
  return (
    <div className="w-[60%] mx-auto mt-5  flex flex-col justify-center items-center border-1 shadow-md">
      <h1 className="flex justify-center items-center text-3xl font-bold underline">
        Employees Managemnet(CRUD)
      </h1>

      <h3 className="text-2xl font-bold pt-4">Employee Details</h3>

      <div className="w-full pt-6">
        <p className="font-bold text-xl px-6">{empName}</p>
        <div className=" bg-gray-100 font-bold rounded-md p-4 m-5 ">
          <p className="text-xl">Address</p>
          <p>Line1: <span className="font-medium text-gray-700">  {line1}</span></p>
          <p>City:  <span className="font-medium text-gray-700">  {city}</span></p>
          <p>Country: <span className="font-medium text-gray-700">  {country}</span></p>
          <p>Zip: <span className="font-medium text-gray-700">  {zip}</span></p>
        </div>
      </div>

      <div className="w-full">
        <p className="font-bold text-xl px-6">Contacts</p>
        <div className=" font-bold rounded-md p-6 m-3 ">
          <p>Email:<span className="font-medium text-gray-700">  {email}</span></p>
          <p>Phone:<span className="font-medium text-gray-700">  {phoneNo}</span></p>
        </div>
      </div>
    </div>
  );
}

export default Userdetails;
