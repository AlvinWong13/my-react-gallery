import React, {Component} from 'react';
import axios from 'axios';

class GalleryItem extends Component {
  state = {
    toggle: true,
  } // end state

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

    // toggle between description and image
    toggleDisplay = () => {
      console.log('toggle display');
      this.setState({
        toggle: !this.state.toggle
      })
    }

    //delete picture
    deletePicture = (Id) => {
      console.log('Delete picture');
      axios.delete(`./gallery/${Id}`)
      .then(response => {
        console.log(response);
        this.props.getGallery();
      })
      .catch(err => {
        console.log('Cannot delete picture', err);
      })
    }

  // posting pictures to DOM and ability to increase likes for pictures
  render() {
    console.log(this.props);
    return(
      <div>
        <div className="galleryItem" onClick={this.toggleDisplay}>
          {this.state.toggle ? <img src={this.props.picture.path} alt={this.props.picture.description} /> : 
            <div>{this.props.picture.description}</div>}
        </div>
        <div>
          <button onClick={()=> this.addLikes(this.props.picture.id)}>Like</button><br/>
          <p>{this.props.picture.likes} Likes</p>
        </div>
      </div>
    ) // end return
  } // end render
}

export default GalleryItem;