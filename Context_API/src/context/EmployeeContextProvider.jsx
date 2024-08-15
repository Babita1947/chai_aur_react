import { useState } from 'react';
import EmployeeContext from './EmployeeContext';

const EmployeeContextProvider = ({ children }) => {
    const [empName, setEmpName] = useState("");
    const [line1, setLine1] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [zip, setZip] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");

    // If 'address' is meant to store a full address, use it here:
    const [address, setAddress] = useState("");

    return (
        <EmployeeContext.Provider
            value={{
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
                phoneNo,
                setPhoneNo,
            }}
        >
            {children}
        </EmployeeContext.Provider>
    );
}

export default EmployeeContextProvider;
