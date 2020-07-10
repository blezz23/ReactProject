import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
