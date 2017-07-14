import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div id="navbar">
        <nav className="navbar navbar-inverse navbar-fixed-top">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarcol" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                  <a className="navbar-brand" href="/">Fish Pal</a>
              </div>
              <div id="navbarcol" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/about">About</Link></li>
                </ul>
              </div>
        </nav>
        
        {this.props.children} 

         <nav className="navbar navbar-default navbar-fixed-bottom">
              <ul className="nav navbar-nav">
                  <li><Link to="/contact">Contact</Link></li>
              </ul>
          </nav>
      </div>
    );
  }
}

export default App;


