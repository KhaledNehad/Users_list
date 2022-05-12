import React from 'react';
import styles from './app.module.css';
import CardList from './components/pages/CardList/CardList';

const App = () => {

  return (
    <div className={styles.container}>
      <header>
        <h1>Meet the team</h1>
        <nav>
          <button>Sort</button>
          <input type='search' placeholder='Search' />
          <button>Grid</button>
        </nav>
      </header>
      <main>
        <CardList />
      </main>
    </div>
  );
};

export default App;
