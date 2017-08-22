import React from 'react';
import {Link } from 'react-router';


class Footer extends React.Component{
  
  render(){
      return (
          <div id="footer">
	          <nav className="navbar navbar-default navbar-fixed-bottom">
	              <ul className="nav navbar-nav">
	                  <li><Link to="/about">About</Link></li>
	              </ul>
	          </nav>
          </div>
          );
      }
    }

export default Footer;