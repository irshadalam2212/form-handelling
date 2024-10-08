import React from "react";
import Table from "react-bootstrap/Table";

const table = ({ data }) => {
  return (
    <div className="container mt-5 p-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Position</th>
            <th>Expected Salary</th>
            <th>Start Date</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((emp, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.phone}</td>
                <td>{emp.position}</td>
                <td>{emp.salary}</td>
                <td>{emp.availability}</td>
                <td>
                  {emp.resume ? (
                    <a
                      href={URL.createObjectURL(emp.resume)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Resume
                    </a>
                  ) : (
                    "No Resume"
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="text-center" colSpan="8">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default table;
