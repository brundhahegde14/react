import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function NameList() {
  const [users, setUsers] = useState([]);

  const handleDeleteButton = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>User List</h3>

      {users.length === 0 ? (
        <p>No users available</p>
      ) : (
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
      )}
    </div>
  );
}

export default NameList;
