/* eslint-disable react-refresh/only-export-components */
import { useState, createContext } from "react";
import F2 from "./F2";

export const Fc1 = createContext();

export default function F1() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
    city: "",
    gender: "",
  });

  const hc = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Fc1.Provider value={formData}>
      <div style={{ padding: "20px", maxWidth: "400px" }}>
        <h2>Registration Form</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={hc}
            />
          </div>
          <br />
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={hc}
            />
          </div>
          <br />
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={hc}
            />
          </div>
          <br />
          <div>
            <label>City:</label>
            <select name="city" value={formData.city} onChange={hc}>
              <option value="">Select City</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Tokyo">Tokyo</option>
            </select>
          </div>
          <br />
          <div>
            <label>Gender:</label>
            <input
              type="radio"
              name="gender"
              value="Male"  
          checked={formData.gender === "Male"}
              onChange={hc}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={hc}
            />{"  "}
            Female
          </div>
        </form>
        <hr />
        <F2 />
      </div>
    </Fc1.Provider>
  );
}
