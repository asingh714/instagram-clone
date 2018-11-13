import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      inputText: ''
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

  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) => (
          <Comment key={this.index} comment={comment} />
        ))}
        <CommentForm addCharacter={this.addCharacter} inputText={this.state.inputText} handleChange={this.handleChange}/>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
