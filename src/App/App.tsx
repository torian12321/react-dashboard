import React from 'react';
// import logo from './logo.svg';
import Button from '../ui/components/Button';
import Panel from '../ui/components/Panel';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    <header>
      demo
      <Panel title='test'>
        <Button label='Bla bla' onClick={()=> {}} />
      </Panel>
    </header>
  </div>
);

export default App;
