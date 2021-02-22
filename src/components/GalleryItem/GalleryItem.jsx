import React, {Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
  },
}));

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

    //delete picture from gallery DB
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
    } // end deletePicture

  // posting pictures to DOM and ability to increase likes for pictures
  render() {
    console.log(this.props);
    return(
      <div className="galleryItem">
        <div onClick={this.toggleDisplay}>
          {this.state.toggle ? <img src={this.props.picture.path} alt={this.props.picture.description} /> : 
            <div>{this.props.picture.description}</div>}
        </div>
        <div>
          <Button variant="outlined" color="primary" size="small" startIcon={<ThumbUpAltIcon />}
            onClick={()=> this.addLikes(this.props.picture.id)}>Like</Button><span></span>
          <Button variant="outlined" color="secondary" size="small" startIcon={<DeleteIcon />} 
            onClick={()=> this.deletePicture(this.props.picture.id)}>Delete</Button><br/>
          <p className="likes">{this.props.picture.likes} Likes</p>
        </div>
      </div>
    ) // end return
  } // end render
}

export default GalleryItem;