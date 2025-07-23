import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function NameList() {
  const [users, setUsers] = useState([
    { id: 101, name: 'shree', age: 25 },
    { id: 102, name: 'Ajay', age: 30 },
    { id: 103, name: 'Leela', age: 22 },
    { id: 104, name: 'manu', age: 28 }
  ]);

  const [newName, setNewName] = useState('');
const handleAddUser = () => {
    if (newName.trim() === '') return;
const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 101;
    const newUser = { id: newId, name: newName, age: 20 }; 
    setUsers([...users, newUser]);
    setNewName('');
  };

  const handleDeleteButton = (id) => {
    alert(`delete student with id: ${id}`);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>User List</h3>

      <input type="text"placeholder="Enter name" value={newName} onChange={(e) => setNewName(e.target.value)}
      />
      <Button variant="primary" size="sm" onClick={handleAddUser}>
        Add User
      </Button>

      <table border="1" align="center" cellPadding="10" cellSpacing="0" style={{ marginTop: '20px' }}>
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
