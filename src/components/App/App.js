import React from 'react';
import '../../style/css/styles.css';
import Header from '../Header/Header';
import Settings from '../Settings';
import Tournament from '../Tournament';
import Footer from '../Footer';
import Music from '../Music/Music';

const App = ({ tournamentStarted }) => (
  <>
  <Header />
  { !tournamentStarted ? <Settings /> : <Tournament /> }
  <Footer />
  <Music />
  </>
);

export default App;
