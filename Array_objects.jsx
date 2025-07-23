import React from 'react';

function NameList() {
  const users = [
    { id: 101, name: 'shree', age: 25 },
    { id: 102, name: 'Ajay', age: 30 },
    { id: 103, name: 'Leela', age: 22 },
    { id: 104, name: 'manu', age: 28 }
  ];

  return (
    <table border="1" align="center"cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NameList;
