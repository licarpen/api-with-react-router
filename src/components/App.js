import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './header/Header';
import CharactersList from './charactersList/CharactersList';
import CharacterDetail from './characterDetail/CharacterDetail';

export default function App() {
  return (
    <Router>
      <Route path="/" component = {Header} />
      <Route exact path="/" component={CharactersList} />
      <Route path="/character/:id" component = {CharacterDetail} />
    </Router>
  );
}
