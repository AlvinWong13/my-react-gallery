import React, {Component} from 'react';

// import data from other components
import GalleryItem from '../GalleryItem/GalleryItem'


class GalleryList extends Component {

  // capture gallery and get information from GalleryItem for pictures.
  render() {
    return (
      <div>
        {this.props.galleryList.map(picture =>
          <div key={picture.id}>
            <GalleryItem picture={picture} getGallery={this.props.getGallery}/>
          </div>
          )}
      </div>
    ) // end return
  } // end render
}


export default GalleryList;