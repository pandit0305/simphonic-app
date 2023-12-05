import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LandingPage from './pages/landingPage/LandingPage';
import AllRouters from './allRouters/AllRouters';

function App() {
  return (
    <>
       <Header/>
        <AllRouters/>
       <Footer/>
    </>
  );
}

export default App;
