import React from 'react';
import Button from 'react-bootstrap/Button';

function NameList() {
  const users = [
    { id: 101, name: 'shree', age: 25 },
    { id: 102, name: 'Ajay', age: 30 },
    { id: 103, name: 'Leela', age: 22 },
    { id: 104, name: 'manu', age: 28 }
  ];

  const handleDeleteButton = (id) => {
    alert(`delete student with id: ${id}`);
  };

  return (
    <div>
    <h2>Deleting the data</h2>
    <table border="1" align="center" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>
              <Button variant="danger" size="sm" onClick={() => handleDeleteButton(user.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default NameList;
