import React, {useState} from 'react';
import styles from './app.module.css';
import CardList from './components/pages/CardList/CardList';
import { RiArrowUpDownLine } from 'react-icons/ri'
import { FiGrid , FiList} from 'react-icons/fi';


const App = () => {
    const [view, setView] = useState('grid');
    const [isSortByName, setIsSortByName] = useState(false);

    const changeView = () => {
        setView(view === 'grid' ? 'list' : 'grid');
    }

    const handleSortByName = () => {
        setIsSortByName(!isSortByName);
        console.log(isSortByName);
    }

  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.page_title}>Meet the team</h1>
        <nav>
          <RiArrowUpDownLine
            style={{ fontSize: '25px' }}
            onClick={handleSortByName}
          />
          <input type='search' className={styles.search_input} />
          <button onClick={changeView}>
            {view === 'grid' ? (
              <FiGrid style={{ fontSize: '25px' }} />
            ) : (
              <FiList style={{ fontSize: '25px' }} />
            )}
          </button>
        </nav>
      </header>
      <main>
        <CardList view={view} isSort={isSortByName} />
      </main>
    </div>
  );
};

export default App;
