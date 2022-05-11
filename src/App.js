import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import getUsers from './services/usersApi';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const users = await getUsers();
      setUsers(users);
      console.log(users);
    } catch (error) {
      setError(error);
    }
      setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Meet the team</h1>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error.message}</p> : null}
      <div className={styles.grid}>
        {users?.map((user) => (
          <div key={user.email}>
            <img src={user.picture.large} alt='user' />
            <h2>
              {user.name.first} {user.name.last}
            </h2>
            <p>{user.email}</p>
            <p>{user.cell}</p>
            <p>{user.location.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
