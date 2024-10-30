import './App.css';
import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from "./components/nav/Nav";
import Header from './components/header/Header';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>
      <Header/>
      <Section1/>
      <Section2/>
      <Footer/>
    </Fragment>
  );
}

export default App;
