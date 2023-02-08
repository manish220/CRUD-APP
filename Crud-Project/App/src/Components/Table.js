import React from "react";

const Table = ({ data, editData, deleteData }) => {
  return (
    <div>
      <table
        style={{
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
              <td>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    editData(row);

                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button onClick={(e) => deleteData(row.id)}>Delete</button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
