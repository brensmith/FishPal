import React, { Component } from 'react';
import './home.css';
import DATA from './fishdefault.js';

function searchingFor(term){
    return function(x){
        if (x.species !== undefined)
            {
        return x.species.toLowerCase().includes(term.toLowerCase()) || x.location.toLowerCase().includes(term.toLowerCase()) || x.description.toLowerCase().includes(term.toLowerCase()) || !term ;
            }
        else
            {
                console.log("Search Not Available");
            }
    }
    
}
class Home extends Component {

  constructor(props) {
  
  localStorage.removeItem(DATA);  
    
    localStorage.setItem('DATA', JSON.stringify(DATA));
    
    super(props);
    
    this.state = {
          fishes: JSON.parse(localStorage.getItem('fishes')) || [],
                    term: '',
        
    }
      this.searchHandler = this.searchHandler.bind(this);

        var fishescheck = JSON.parse(localStorage.getItem('fishes'));
          if (fishescheck === null || fishescheck.length === 0)
            {
                let fishes = this.state.fishes;

                  fishes.push(DATA["0"], DATA["1"], DATA["2"]);
   
    this.setState({fishes});
                    localStorage.setItem('fishes', JSON.stringify(fishes));
            }
              else{
                  
                  }

    }    
    
    searchHandler(event){
        this.setState({term: event.target.value})
        
    }
    
     delete(fish){
        const newState = this.state.fishes;
            if (newState.indexOf(fish) > -1) {
              newState.splice(newState.indexOf(fish), 1);
                this.setState({fishes: this.state.fishes});
                  fishes: JSON.parse(localStorage.setItem("fishes", JSON.stringify(this.state.fishes)));
              }
            }
    
    
    
    
  displayFish() {
    let resultsArray = [];
    this.state.fishes.filter(searchingFor(this.state.term)).reverse().map((fish, i) => {
      resultsArray.push( 
        <div key={fish.id} className="row justify-content-start">
                  <div className="col-md-6">
                  
                      <p>Species :{fish.species}</p>
                      <p>Weight in lbs :{fish.weight}</p>
                      <p>Location Caught :{fish.location}</p>
                      <p>Description :{fish.description}</p>
                      <p>Date Added : <small>{fish.date}</small></p>
                      <button type="button" onClick={this.delete.bind(this, fish)} className="btn btn-default btn-xs">Delete</button> &nbsp;
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
            
            <form>
            <input type="text"
                 onChange={this.searchHandler}
                 value={this.state.term}
                  placeholder="Search For a Species"/>  
                </form>
            <br></br>
            {this.displayFish()}

            
           </div>  
      </div>
           
    );
  }
}

export default Home;