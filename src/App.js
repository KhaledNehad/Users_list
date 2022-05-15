import React, { useState } from 'react';
import CardList from './components/pages/CardList/CardList';
import { RiArrowUpDownLine } from 'react-icons/ri';
import { FiGrid } from 'react-icons/fi';
import {BsList} from 'react-icons/bs'
import GlobalStyle from './Global.styles';
import { Container, Nav, PageTitle, SearchInput } from './App.styles';
import { ThemeProvider } from 'styled-components';

const theme = {
  mobileS: '320px',
  mobile: '576px',
  tablet: '768px',
  large: '992px',
};

const App = () => {
  const [view, setView] = useState('grid');
  const [sortByName, setSortByName] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const changeView = () => {
    setView(view === 'grid' ? 'list' : 'grid');
  };

  const handleSortByName = () => {
    setSortByName(sortByName === 'asc' ? 'desc' : 'asc');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container>
          <header>
            <PageTitle>Meet the team</PageTitle>
            <Nav>
              <RiArrowUpDownLine
                style={{ fontSize: '25px', cursor: 'pointer' }}
                onClick={handleSortByName}
              />
              <SearchInput onChange={handleSearch} placeholder="Search by name" />
              <div onClick={changeView}>
                {view === 'grid' ? (
                  <FiGrid style={{ fontSize: '25px', cursor: 'pointer' }} />
                ) : (
                  <BsList style={{ fontSize: '25px', cursor: 'pointer' }} />
                )}
              </div>
            </Nav>
          </header>
          <main>
            <CardList
              view={view}
              sortByName={sortByName}
              searchTerm={searchTerm}
            />
          </main>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
