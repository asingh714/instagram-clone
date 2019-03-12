import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

import Comment from "./Comment";
import CommentForm from "./CommentForm";

// import "./CommentSection.css";

export const UserTimestamp = styled.div`
  font-size: 1.2rem;
  color: gray;
  margin-bottom: 1rem;
`

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  addNewComment = (event) => {
    event.preventDefault(); 

    const newComment = {
      username: localStorage.getItem("user"),
      text: this.state.comment
    };

    this.setState({
      comments: [...this.state.comments, newComment],
      comment: ""
    })
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log("Comments:", this.state.comments);
    return (
      <>
        {this.state.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <UserTimestamp>{this.props.timestamp}</UserTimestamp>
        <CommentForm
          addNewComment={this.addNewComment}
          comment={this.state.comment}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

CommentSection.defaultProps = {
  comments: []
};

export default CommentSection;
