import React, {Component} from 'react';
import axios from 'axios';

class GalleryItem extends Component {
  state = {} // end state

  // increase likes for photo
    addLikes = (Id) => {
      console.log('Increased photo likes');
      axios.put(`./gallery/like/${Id}`)
      .then(response => {
        this.props.getGallery();
      })
      .catch(err => {
        console.log('Cannot get gallery', err);
      })
    } // end addLikes

  // posting pictures to DOM and ability to increase likes for pictures
  render() {
    console.log(this.props);
    return(
      <div key={this.props.picture.id}>
        <div>
          <img src={this.props.picture.path} alt={this.props.picture.description} />
          <div>
            <button onClick={()=> this.addLikes(this.props.picture.id)}>Like</button><br/>
            <p>{this.props.picture.likes} Likes</p>
          </div>
        </div>
      </div>
    ) // end return
  } // end render
}

export default GalleryItem;