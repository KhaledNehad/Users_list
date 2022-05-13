import React, { useState } from 'react';
import CardList from './components/pages/CardList/CardList';
import { RiArrowUpDownLine } from 'react-icons/ri';
import { FiGrid, FiList } from 'react-icons/fi';
import GlobalStyle from './Global.styles';
import { Container, Nav, PageTitle, SearchInput} from './App.styles';

const App = () => {
  const [view, setView] = useState('grid');
  const [isSortByName, setIsSortByName] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const changeView = () => {
    setView(view === 'grid' ? 'list' : 'grid');
  };

    const handleSortByName = () => {
      setIsSortByName(prevState =>  !prevState);
    };

    const handleSearch = (e) => { 
        setSearchTerm(e.target.value);
    }

  return (
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
            <SearchInput onChange={handleSearch} />
            <div onClick={changeView}>
              {view === 'grid' ? (
                <FiGrid style={{ fontSize: '25px', cursor: 'pointer' }} />
              ) : (
                <FiList style={{ fontSize: '25px', cursor: 'pointer' }} />
              )}
            </div>
          </Nav>
        </header>
        <main>
          <CardList
            view={view}
            isSortByName={isSortByName}
            searchTerm={searchTerm}
          />
        </main>
      </Container>
    </>
  );
};

export default App;
