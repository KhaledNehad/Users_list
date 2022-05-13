import React, { useState, useEffect } from 'react';
import Card from '../../ui/Card/Card';
import getUsers from './../../../services/usersApi';
import styles from './cardList.module.css';

const CardList = ({ view, isSortByName, searchTerm }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [sortedUsers, setSortedUsers] = useState([]);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const sortByName = (users) => {
    const sortedUsers = users.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });
    setSortedUsers(sortedUsers);
  };

  useEffect(() => {
    if (!isSortByName) {
      setSortedUsers(users);
    } else {
      sortByName(users);
    }
  }, [isSortByName, users]);

  useEffect(() => {
    if (searchTerm) {
      const filteredUsers = users.filter((user) => {
        return (
          user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.name.last.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setSortedUsers(filteredUsers);
    } else {
      setSortedUsers(users);
    }
  }, [searchTerm]);

  return (
    <>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error.message}</p> : null}

      <div className={styles.grid}>
        {sortedUsers.map((user) => (
          <Card
            key={user.email}
            fname={user.name.first}
            lname={user.name.last}
            email={user.email}
            phone={user.phone}
            picture={user.picture.large}
            location={user.location.city}
            view={view}
          />
        ))}
      </div>
    </>
  );
};

export default CardList;
