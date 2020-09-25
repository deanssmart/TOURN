import React from 'react';
import '../../style/css/App.css';
import Footer from '../Footer';
import Settings from '../Settings';
import Tournament from '../Tournament';

const App = ({ tournamentStarted }) => (
  <>
  { !tournamentStarted ? <Settings /> :
    <Tournament />    
  }
  <Footer />
  </>
);

export default App;
