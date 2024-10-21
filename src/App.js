// App.js
import React, { useState } from 'react';
import UserInputForm from './UserInputForm';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <h1>User Profiles</h1>
      <UserInputForm onAddUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
