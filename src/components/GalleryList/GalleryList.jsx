import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';

// import data from other components
import GalleryItem from '../GalleryItem/GalleryItem'


class GalleryList extends Component {

  // capture gallery and get information from GalleryItem for pictures.
  render() {
    return (
      <div className="galleryList">
        {this.props.galleryList.map(picture =>
          <div key={picture.id}>
            <Grid item xs={3}>
              <GalleryItem picture={picture} getGallery={this.props.getGallery}/>
            </Grid>
          </div>
          )}
      </div>
    ) // end return
  } // end render
}


export default GalleryList;