import React, {Component} from 'react';
import axios from 'axios';
import Popover from '@material-ui/core/Popover';

class GalleryItem extends Component {
  state = {
    toggle: true,
  } // end state

  // increase likes for photo
    addLikes = (Id) => {
      console.log('Increased photo likes');
      axios.put(`./gallery/like/${Id}`)
      .then(response => {
        window.location.reload();
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

    //delete picture from gallery DB
    deletePicture = (Id) => {
      console.log('Delete picture');
      axios.delete(`./gallery/${Id}`)
      .then(response => {
        console.log(response);
        window.location.reload();
      })
      .catch(err => {
        console.log('Cannot delete picture', err);
      })
    } // end deletePicture

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
          <button onClick={()=> this.addLikes(this.props.picture.id)}>Like</button><span></span>
          <button onClick={()=> this.deletePicture(this.props.picture.id)}>Delete</button><br/>
          <p>{this.props.picture.likes} Likes</p>
        </div>
      </div>
    ) // end return
  } // end render
}

export default GalleryItem;