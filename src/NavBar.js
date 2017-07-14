var React = require('react');

var NavBar = React.createClass({
  render: function(){
    return(
      
      <div> 
          <nav className="navbar-default">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="nav-collapse">
                    <span className="icon-bar"</span>
                    <span className="icon-bar"</span>
                    <span className="icon-bar"</span>
                </button>
                <a className="navbar-brand" href="#">FishPal</a>
              </div>
          </nav>
      </div>

);z

module.exports = NavBar;