import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import Navigation from '../Navigation/Navigation';

import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import PetsPage from '../../pages/PetsPage';
import PetPage from '../../pages/PetPage';

const App = () => (
  <div className={styles.app}>
    <Navigation />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/pets/:id" component={PetPage} />
      <Route path="/pets" component={PetsPage} />
      <Route component={HomePage} />
    </Switch>
  </div>
);

export default App;
