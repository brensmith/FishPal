import React, { Component } from 'react';
import './about.css';
import './round-about.css';


class about extends Component {
  render() {
    return (
	      	<div className="about">
		        <div className="container">
			        <div className="row">
			            <div className="col-md-10">
			                <h1 className="page-header">About <small>FishPal React SPA. </small></h1>
			                	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>
				            		
	                	</div>
		        	</div>
		        	<div className="row">
			            <div className="col-md-10">
			            	<p><small>(Figure 1.)</small> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>
	                				<img className="img-round img-responsive img-right" src="http://placehold.it/400x200" alt="Figure 1"></img>
	                	</div>
		        	</div>
		        	<div className="row">
			            <div className="col-md-10">
			            	<p><small>(Figure 2.)</small> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>
	                				<img className="img-round img-responsive img-right" src="http://placehold.it/400x200" alt="Figure 2"></img>
	                	</div>
		        	</div>
		        	<div className="row">
			            <div className="col-md-10">
			            	<p><small>(Figure 3.)</small> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>
	                				<img className="img-round img-responsive img-right" src="http://placehold.it/400x200" alt="Figure 3"></img>
	                	</div>
		        	</div>
		        	<hr></hr>

        		</div>
        	</div>
    );
  }
}

export default about;
