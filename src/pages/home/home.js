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
                console.log("Search Unavailable !");
            }
    }
    
}
class Home extends Component {

  constructor(props) {
  
      localStorage.removeItem(DATA);  
        
    super(props);
        
      this.state = {fishes: JSON.parse(localStorage.getItem('fishes')) || [], term: ''}
      
      this.searchHandler = this.searchHandler.bind(this);

        var fishescheck = JSON.parse(localStorage.getItem('fishes'));
          
          if (fishescheck === null || fishescheck.length === 0)
            {
                  let fishes = this.state.fishes;

                  fishes.push(DATA["0"], DATA["1"], DATA["2"], DATA["3"], DATA["4"]);
   
                  this.setState({fishes});

                  localStorage.setItem('fishes', JSON.stringify(fishes));
            }
          
          else{
                  console.log("An Error has occured !");
              }

    }    
    
        searchHandler(event){this.setState({term: event.target.value})
        
    }


    
     delete(fish){
        const newState = this.state.fishes;
            if (newState.indexOf(fish) > -1) {
              newState.splice(newState.indexOf(fish), 1);
                this.setState({fishes: this.state.fishes});
                  fishes: JSON.parse(localStorage.setItem("fishes", JSON.stringify(this.state.fishes)));
              }
            }
    
    edit(fish)
    {
      let editfish = fish;
      var Addspecies = prompt ("Add new species",fish.species);
      var Addweight = prompt ("Add new weight", fish.weight);
      var Addlocation = prompt ("Add new location", fish.location);
      var Adddescription = prompt ("Add new description", fish.description);
      var Adddate = prompt ("Add new date", fish.date);

        if (Addspecies !== null  && Addweight !== null && Addlocation !== null && Adddescription !== null && 
            Addspecies !== ''  && Addweight !== '' && Addlocation !== '' && Adddescription !== '')
            {
                       
                       editfish.species = Addspecies;
                       editfish.weight = Addweight;
                       editfish.location = Addlocation;
                       editfish.description = Adddescription;
                       editfish.date = Adddate;

                       this.setState({editfish});

                       let fishes = this.state.fishes;
                       
                       localStorage.setItem('fishes', JSON.stringify(fishes));


                        console.log(editfish);
             }
        else
         {
           alert("You Cannot Have Blank Fields!");
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
                      <div className="buttonSty">
                      <button type="button" onClick={this.delete.bind(this, fish)} className="btn btn-default btn-xs">Delete</button> &nbsp;
                      <button type="button" onClick={this.edit.bind(this, fish)} className="btn btn-info btn-xs">Edit</button>
                      </div>
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
                  </div>
              </div>
            <div className="form-group">
                <div className="col-4">
                  <input className="searchInp" type="search" onChange={this.searchHandler}
                  value={this.state.term}
                  placeholder="Search Database"/>  
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