import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './header/Header';
import CharactersList from './charactersList/CharactersList';

export default function App() {
  return (
    <Router>
      <Header />
      <CharactersList />
    </Router>
  ) ;
}
