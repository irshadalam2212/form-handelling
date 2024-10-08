import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    salary: "",
    availability: "",
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    // if input is a file use file array
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      salary: "",
      availability: "",
      resume: null,
    });
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleFormSubmit}>
        <h1>Job Application Form</h1>
        <fieldset className="mt-5">
          <legend>
            <u>Personal Information</u>
          </legend>
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label htmlFor="email-id">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <label htmlFor="phone-number">Contact</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter Your Mobile Number"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset>
          <legend>
            <u>Job Details</u>
          </legend>
          <label htmlFor="position">Position Applied For</label>
          <select
            name="position"
            id=""
            value={formData.position}
            onChange={handleInputChange}
          >
            <option value="react">React Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="full-stack">Fullstack Developer</option>
            <option value="mern">MERN Developer</option>
          </select>
          <label htmlFor="salary">Expected Salary</label>
          <input
            type="number"
            value={formData.salary}
            name="salary"
            placeholder="Enter your expected salary in lacs"
            onChange={handleInputChange}
          />
          <label htmlFor="availability">Expected Start Date</label>
          <input
            type="date"
            name="availability"
            value={formData.availability}
            onChange={handleInputChange}
          />
          <label htmlFor="resume">Upload Resume</label>
          <input type="file" name="resume" onChange={handleInputChange} />
        </fieldset>
        <div className="button">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
