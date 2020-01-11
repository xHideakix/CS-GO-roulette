import React from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


export default class App extends React.Component {
  render(){
    return (
      <div className="body">
        <Header />
        <Main />
        <Footer />
      </div> 
    );
  }
}



