import React from 'react';
import {Link } from 'react-router';
import './App.css';

class Footer extends React.Component{
  
  render(){
      return (
          <div id="footer">
	          <nav className="navbar navbar-default navbar-fixed-bottom">
	              <div className="footcontainer">
	                  <p className="foot-text">This site was built by Brendan Smith. 2017</p>
	              </div>
	          </nav>
          </div>
          );
      }
    }

export default Footer;