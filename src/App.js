import React, { Component } from 'react';
import './App.css';
import './index.css';
import Header from './header.js';
import Footer from './footer.js';

class App extends Component {
  render() {
    return (
      <div id="appContainer">
          <Header/>
          
              {this.props.children} 

          <Footer/>
      </div>
    );
  }
}

export default App;


