import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { browserHistory } from 'react-router';
const CLOUD_IMAGE_URL = 'https://api.cloudinary.com/v1_1/robzombie/image/upload';
const CLOUD_IMAGE_PRESET = 'xqy4hb8x';
var moment = require('moment');
var postdate = moment().format("DD-MM-YYYY");
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
            date: postdate,
      },
          
      uploadedFileCloudinaryUrl: ''
          
    };
        
    this.submitFish = this.submitFish.bind(this);
    this.onImgDrop = this.onImgDrop.bind(this);
        
  }
    
      

  onImgDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUD_IMAGE_URL)
                        .field('upload_preset', CLOUD_IMAGE_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
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
        newFish.image = this.state.uploadedFileCloudinaryUrl;

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
                console.log("Alert")
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
            <label htmlFor="dropzone">Add an Image</label>
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImgDrop}>
            <h5>Drop Image or Add Image via Click.</h5>
          </Dropzone>
            <br>
            </br>
          <div>
            {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div>
              <p>{this.state.uploadedFile.name}</p>
              <img alt={this.state.uploadedFile.name} src={this.state.uploadedFileCloudinaryUrl} />
            </div>}
          </div>
                   
                                        
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

            <button type="button" onClick={this.submitFish} className="btn btn-info">Submit</button>
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