import React from 'react';
import {Link } from 'react-router';




class Header extends React.Component{
  
  render(){
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
                        <a className="navbar-brand" href="/">FishPal</a>
                    </div>
                    <div id="navbarcol" className="collapse navbar-collapse">
                      <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/addfish">Add Fish</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                      </ul>
                    </div>
              </nav>
          </div>

        );
      }
    }

export default Header;
