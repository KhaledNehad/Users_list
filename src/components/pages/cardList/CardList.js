import React, { useState, useEffect } from 'react';
import Card from '../../ui/Card/Card';
import getUsers from './../../../services/usersApi';

import { StyledCardList } from './CardList.styles';

const CardList = ({ view, isSortByName, searchTerm }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [numberOfUsers, setNumberOfUsers] = useState(10);

  const [sortedUsers, setSortedUsers] = useState([]);

  const handleScroll = (e) => {

    const { scrollHeight, scrollTop, clientHeight } = e.target;
      console.log(scrollHeight, scrollTop, clientHeight);

    if (scrollHeight - scrollTop === clientHeight) {
      setNumberOfUsers((prevState) => prevState + 10);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
        const users = await getUsers(numberOfUsers);
        setUsers((prevState) => [...prevState, ...users]);
      
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [ numberOfUsers ]);

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
    <div onScroll={handleScroll}>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error.message}</p> : null}

      <StyledCardList view={view}>
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
      </StyledCardList>
    </div>
  );
};

export default CardList;
