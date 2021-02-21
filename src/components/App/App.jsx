import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  state = {
    galleryList: [],
  } // end state

  // on load get gallery
  componentDidMount() {
    this.getGallery();
  } // end componentDidMount

  // function to get gallery
  getGallery = () => {
    axios.get('/gallery')
    .then(response => {
      this.setState({
        galleryList: response.data
      })
    })
    .catch(err => {
      console.log('Unable to retrieve gallery', err);
    })
  } // end getGallery

  render() {
    console.log(this.State)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <GalleryForm getGallery={this.getGallery}/>
          </Grid>
          <br/>
          <GalleryList galleryList={this.state.galleryList}/>
        </Grid>
      </div>
    ); // end return
  } // end render
}

export default App;
