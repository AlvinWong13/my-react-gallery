import React, {Component} from 'react';
import axios from 'axios';

class GalleryForm extends Component {
  state = {
    path: '',
    description: '',
  } // end state

  // POST request
  addPicture = () => {
    console.log('Adding Picture');
    axios.post('/gallery', this.state)
    .then(response => {
      console.log(response);
      this.props.getGallery();
    })
    .catch(err => {
      console.log(err);
    })
  } // end POST

  // inputs to text boxes
  handleInputs = (event, name) => {
    this.setState({
      ...this.state,
      [name]: event.target.value,
    })
  } // end handleInputs

  render() {
    return(
      <div>
        <input type="text" placeholder="url" onChange={(event) => this.handleInputs(event, 'path')}/>
        <input type="text" placeholder="Description" onChange={(event) => this.handleInputs(event, 'description')}/>
        <button onClick={this.addPicture}>Add Picture to Gallery</button>
      </div>
    ) // end return
  } // end render
}


export default GalleryForm;