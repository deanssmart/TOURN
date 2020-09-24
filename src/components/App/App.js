import React from 'react';
import '../../style/css/App.css';
import Settings from '../Settings';
import Tournament from '../Tournament';
import Round from '../Round';


const App = ({ tournamentStarted }) => (
  <>
  { !tournamentStarted ? <Settings /> :
    <Round />
  }
  </>
);

export default App;
