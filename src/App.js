import React from 'react';
import './App.css'
import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Avatar from "./components/Avatar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Content/>
      <Avatar/>
      <Footer/>
    </div>
  );
}

export default App;
