import React, { useState, useEffect } from 'react';
import Card from '../../ui/Card/Card';
import getUsers from './../../../services/usersApi';
import styles from './cardList.module.css';

const CardList = () => {
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
    <div>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error.message}</p> : null}

      <div className={styles.grid}>
        {users?.map((user) => (
          <Card
            key={user.email}
            fname={user.name.first}
            lname={user.name.last}
            email={user.email}
            phone={user.phone}
            picture={user.picture.large}
            location={user.location.city}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
