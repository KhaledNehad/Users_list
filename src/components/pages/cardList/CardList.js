import React, { useState, useEffect } from 'react';
import Card from '../../ui/Card/Card';
import getUsers from './../../../services/usersApi';
import propTypes from 'prop-types';


import { StyledCardList, StyledErrorMessage, StyledButton } from './CardList.styles';

const CardList = ({ view, sortByName, searchTerm }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ message: '' });
  const [numberOfUsers, setNumberOfUsers] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [sortedUsers, setSortedUsers] = useState([]);

  // const handleScroll = (e) => {
  //   const { scrollHeight, scrollTop, clientHeight } = e.target;
  //   console.log(scrollHeight, scrollTop, clientHeight);

  //   if (scrollHeight - scrollTop === clientHeight) {
  //     setNumberOfUsers((prevState) => prevState + 10);
  //   }
  // };

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const usersList = await getUsers(numberOfUsers, currentPage);
      setUsers((prevState) => [...prevState, ...usersList]);
      setLoading(false);
    } catch (error) {
      setError({ message: error.message });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [numberOfUsers, currentPage]);

  // sorting users
  const HandleSortByName = (users) => {
    const sortedUsers = users.sort((a, b) => {
      if (sortByName === 'asc') {
        if (a.name.first < b.name.first) {
          return -1;
        }
        if (a.name.first > b.name.first) {
          return 1;
        }
        return 0;
      } else {
        if (a.name.first > b.name.first) {
          return -1;
        }
        if (a.name.first < b.name.first) {
          return 1;
        }
        return 0;
      }
    });
    setSortedUsers(sortedUsers);
  };

  useEffect(() => {
    if (sortByName === 'asc' || sortByName === 'desc') {
      HandleSortByName(users);
    } else {
      setSortedUsers(users);
    }
  }, [sortByName, users]);

  // search users

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


  const handleLoadMore = () => {

    if (currentPage >= 5) {
      setError({message: 'You have reached the maximum number of pages'});
    } else {
      setCurrentPage((prevState) => prevState + 1);
    }
  }

  return (
    <>
      {loading && <p>Loading...</p>}

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
      {error ? (
        <StyledErrorMessage type='info'>
          {error.message}
        </StyledErrorMessage>
      ) : (
          <StyledButton onClick={handleLoadMore}>Load More</StyledButton>
        // <button onClick={handleLoadMore}>more</button>
      )}
    </>
  );
};

CardList.propTypes = {
  view: propTypes.string,
  sortByName: propTypes.string,
  searchTerm: propTypes.string,
}

CardList.defaultProps = {
  view: 'grid',
  sortByName: 'asc',
  searchTerm: '',
}

export default CardList;
