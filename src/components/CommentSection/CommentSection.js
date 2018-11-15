import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import styled from 'styled-components';
import "./CommentSection.css"


const BottomSection = styled.div`
  padding: 0 1rem;
`;

const LikeCommentSection = styled.div`
  margin-bottom: 1rem;
`;

const TimeStamp = styled.p`
  font-size: 1.2rem;
  color: gray;
  margin-bottom: 1rem;
`

const Likes = styled.p`
  margin-bottom: 1rem;
  font-weight: bold
`


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* 
        Since we are passing props down from Post,
        we need to put them in this.state first. 
      */
      comments: props.comments,
      comment: '',
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

  addComment = ev => { 
    ev.preventDefault(); 
    this.setState({
      comments: [
        ...this.state.comments,
        { username: 'joeshmo',
          text: this.state.comment }
      ],
      comment: ''
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
      <BottomSection>
        <LikeCommentSection>
          <i className="heart far fa-heart" onClick={this.addLike} />
          <i className="far fa-comment" />
        </LikeCommentSection>
        <Likes>{this.state.likes} likes</Likes>
        <div>
          {/* We took our comments from this.state 
          and we are going to map over them since comment
          are an array, For each array, we pass the index
          as key and pass comment down to comment.
          */}
          {this.state.comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
          <TimeStamp>{this.state.timestamp}</TimeStamp>
          <CommentForm addComment={this.addComment} comment={this.state.comment} handleChange={this.handleChange}/>
        </div>
      </BottomSection>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
