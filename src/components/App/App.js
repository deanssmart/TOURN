import React from 'react';
import '../../style/css/styles.css';
import Header from '../Header/Header';
import Settings from '../Settings';
import Tournament from '../Tournament';
import Footer from '../Footer';

const App = ({ tournamentStarted }) => (
  <>
  <Header />
  { !tournamentStarted ? <Settings /> :
    <Tournament />    
  }
  <Footer />
  </>
);

export default App;
