import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      inputText: '',
      likes: props.likes,
      timestamp: props.timestamp,
      like: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addCharacter = ev => { 
    ev.preventDefault(); 
    this.setState({
      comments: [
        ...this.state.comments,
        { username: 'joeshmo',
          text: this.state.inputText }
      ],
      inputText: ''
    })
}

addLike = () =>{
  let numOfLikes = this.state.likes; 

  if(this.state.like === false) {
    numOfLikes += 1;
  } else {
    numOfLikes -= 1;
  }
  this.setState({
      likes: numOfLikes,
      like: !this.state.like
  })

}

componentDidMount() {
  console.log("CDM Invoked!");
  this.setState({ comments: this.state.comments });
}

  render() {
    return (
      <div>
        <div className="like-comment-section">
          <i className="far fa-heart" onClick={this.addLike} />
          <i className="far fa-comment" />
        </div>
        <p>{this.state.likes} likes</p>
        <div>
          {this.state.comments.map((comment, index) => (
            <Comment key={this.index} comment={comment} />
          ))}
          <p>{this.state.timestamp}</p>
          <CommentForm addCharacter={this.addCharacter} inputText={this.state.inputText} handleChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
