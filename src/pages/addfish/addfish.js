import React, { Component } from 'react';
import { browserHistory } from 'react-router';
var FId ;

class AddFish extends Component {
    
  constructor(props) {
        var datacheck = JSON.parse(localStorage.getItem('fishes'));
        if (datacheck === null || datacheck.length === 0)
            {
            FId = 0;
            }
        else
            {
          FId = (JSON.parse(localStorage.getItem('fishes'))[JSON.parse(localStorage.getItem('fishes')).length - 1].id) + 1;
            }

    super(props);
        
    this.state = {
      fishes: JSON.parse(localStorage.getItem('fishes')) || [],
      newFish: {
            id: FId,
            species: "Species",
            weight: "Weight",
            location: "Location",
            description: "Description",
            
       },
             
    };
        
    this.submitFish = this.submitFish.bind(this);
    
        
  }
    
  submitFish() {
    console.log('Submit Fish');
    console.log(this.species.value, this.weight.value, this.location.value, this.description.value);
        if (this.species.value !== '' && this.weight.value !== '' && this.location.value !== '' && this.description.value !== '' )
            {
    let newFish = this.state.newFish;
        newFish.species = this.species.value;
        newFish.weight = this.weight.value;
        newFish.location = this.location.value;
        newFish.description = this.description.value;
        

    this.setState({newFish});

    let fishes = this.state.fishes;
    fishes.push(newFish);

    this.setState({fishes});
    localStorage.setItem('fishes', JSON.stringify(fishes));
    console.log(fishes);
    browserHistory.push('/');
                }
        else
            {
                console.log("Attention")
                alert("Please Fill The Required Fields");

            }

  }


    render() {
            
            
    return (

        <div className="container">
              <div className="row">
                  <div className="col-md-10">
                      <h2 className="page-header">Add a Fish</h2>
                        <p>A Species of Fish can be added to the database by filling in the form below with the required data.</p>
                        
                    </div>
              
      <div className="row">
        <div className="col-md-6" id="fishform">
          <form>
            <br>
            </br>                      
            <div className="form-group">
               <label htmlFor="Species">Species</label>
                  <select id="species" className="form-control" ref={(input)=> this.species = input}>
                      <option value="Select">Select</option>
                      <option value="Atlantic cod">Atlantic cod</option>
                      <option value="Bream">Bream</option>
                      <option value="Bass">Bass</option>
                      <option value="Barbel">Barbel</option>
                      <option value="Brown trout">Brown trout</option>
                      <option value="Conger Eel">Conger Eel</option>
                      <option value="Dace">Dace</option>
                      <option value="Dog Fish">Dog Fish</option>
                      <option value="Eel">Eel</option>
                      <option value="Flounder">Flounder</option>
                      <option value="Mackeral">Mackeral</option>
                      <option value="Pike">Pike</option>
                      <option value="Rainbow Trout">Rainbow Trout</option>
                      <option value="Other">Other...</option>
                  </select>
            </div>


            <div className="form-group">
              <label htmlFor="Weight">Weight</label>
                    <input type="number" 
                            ref={(input) => {this.weight = input;}}
                            className="form-control" 
                            id="weight" 
                            placeholder="Enter Weight" />
            </div>    

            <div className="form-group">
              <label htmlFor="location">Your Location</label>
                    <input type="text" 
                            ref={(input) => {this.location = input;}}
                            className="form-control" 
                            id="location" 
                            placeholder="Enter your Location" />
            </div>
                    
            <div className="form-group">
              <label htmlFor="description">Description</label>
                    <textarea className="form-control" 
                    id="description" 
                    ref={(input) => {this.description = input;}}
                    placeholder="Enter a description" />
            </div>

            <button type="button" onClick={this.submitFish} className="btn btn-default">Submit</button>
          </form>
          <hr/>
      </div>
      </div>
</div>
      </div>

    );
  }
}


export default AddFish;