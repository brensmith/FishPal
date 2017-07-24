import React, { Component } from 'react';
import './home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    
        this.state = {
        fishes: JSON.parse(localStorage.getItem('fishes')) || [],
        }
            var fishescheck = JSON.parse(localStorage.getItem('fishes'));
              if (fishescheck === null || fishescheck.length === 0)
                {
                    let fishes = this.state.fishes;
                    this.setState({fishes});
                    localStorage.setItem('fishes', JSON.stringify(fishes));
                }
                  
                else{
                      
                    }

  }    
    
  displayFish() {
    let resultsArray = [];
    this.state.fishes.map((fish, i) => {
      resultsArray.push( 
        <div key={fish.id} className="row justify-content-start">
                  <div className="col-md-6">
                      <p>Species :{fish.species}</p>
                      <p>Weight in lbs :{fish.weight}</p>
                      <p>Location Caught :{fish.location}</p>
                      <p>Description :{fish.description}</p>
                      
                  <hr></hr>
                  </div>
                  <div className="col-md-4">
                      <img className="img-responsive" src={fish.image} alt={fish.species} />
                  </div>
                  <br></br>
        </div>
                      );
                  });
                  return resultsArray; 

                  }

    

  render() {
    return (
      <div className="home">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <h1 className="page-header">FishPal<small> The Fishermans Database. </small></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>
                        
                    </div>
              </div>
            
            
            <br></br>
            {this.displayFish()}

            
           </div>  
      </div>
           
    );
  }
}

export default Home;