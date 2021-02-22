import React, {Component} from 'react';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

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
      this.emptyInputs();
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
        <Input value={this.state.path} type="text" placeholder="URL" onChange={(event) => this.handleInputs(event, 'path')}/>
        <Input value={this.state.description} type="text" placeholder="DESCRIPTION" onChange={(event) => this.handleInputs(event, 'description')}/>
        <Button variant="outlined" color="primary" startIcon={<AddToPhotosIcon />}
          onClick={this.addPicture}>Add to Gallery</Button>
      </div>
    ) // end return
  } // end render
}


export default GalleryForm;