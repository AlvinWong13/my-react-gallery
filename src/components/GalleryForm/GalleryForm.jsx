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
      this.emptyInputs();
      window.location.reload();
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

  // empty input boxes in DOM
  emptyInputs =() => {
    this.setState({
      path: '',
      description: '',
    })
  } // end emptyInputs

  render() {
    return(
      <div>
        <input value={this.state.path} type="text" placeholder="url" onChange={(event) => this.handleInputs(event, 'path')}/>
        <input value={this.state.description} type="text" placeholder="Description" onChange={(event) => this.handleInputs(event, 'description')}/>
        <button onClick={this.addPicture}>Add Picture to Gallery</button>
      </div>
    ) // end return
  } // end render
}


export default GalleryForm;