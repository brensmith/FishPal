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
			                	<h4>FishPal is a Web application aimed at Anglers and fishing enthusiasts. <br></br></h4>
	                	</div>
		        	</div>
		        	<br></br>
		        	<div className="row justify-content-start">
			            <div className="col-sm-4">
			            	<p><small className="smalli">(Figure 1.)</small> The User can add an image of the Fish captured by clicking on "Add Image" and selecting the image they wish to upload. The User can select a Species using the dropdown menu. The user can add the weight of the fish. the user can add the location the fish was caught at, and the user can add a description.</p>
	                				<img className="img-round img-responsive img-right" src="images/addfish.png" alt="Figure 1"></img>
	                	</div>
		        	
		        	
			            <div className="col-sm-4">
			            	<p><small className="smalli">(Figure 2.)</small> The User can view all saved entry's from the home page. The user can also delete a post by clicking the delete button. The User can edit a post by clicking the edit button for that post.</p>
	                				<img className="img-round img-responsive img-right" src="images/edit.png" alt="Figure 2"></img>
	                	</div>
		        	
		        	
			            <div className="col-sm-4">
			            	<p><small className="smalli">(Figure 3.)</small> The Json Data structure that is saved for the Fish object</p>
	                				<img className="img-round img-responsive img-right" src="images/json.png" alt="Figure 3"></img>
	                	</div>
		        	</div>
		        	<hr></hr>

        		</div>    
        	</div>
    );
  }
}

export default about;
