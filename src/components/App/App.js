import React from 'react';
import '../../style/css/App.css';
import Settings from '../Settings';
import Tournament from '../Tournament';


const App = ({ tournamentStarted }) => (
  <>
  { !tournamentStarted ? <Settings /> :
    <Tournament />
  }
  </>
);

export default App;
