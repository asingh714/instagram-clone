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


  /* 
  handleComment will setState of comment to the value
  of the input 
  */
  handleComment = event => {
    this.setState({
      comment: event.target.value
    })
  }

  /* 
    addcomment will setState of comments to include
    the previous comments along with a new object 
    where username is already set, and text is obtained
    from this.state --> which we got from handleComment
  */
  addComment = event => { 
    event.preventDefault(); 
    this.setState({
      comments: [
        ...this.state.comments,
        { username: 'joeshmo',
          text: this.state.comment }
      ],
      comment: ''
    })
}

/*
Logic for adding likes: 
- We first create a variable that is set to the number of 
likes.
- The state of like is set to false, so when we click,
since state of like is false, we will increase num of likes
by 1. 
- We will then setState to update 2 things: 
  1.likes will be the new numOfLikes
  2. We will set state of like to the opposite 
  of false -> true

- If state of like is true, when we click, we will decrease
num of likes by 1. 
- We will then setState to update 
  1. new numOfLikes which is decreased by 1
  2. We will set state of like to the opposite of true ->
    false
  */
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
          <CommentForm addComment={this.addComment} comment={this.state.comment} handleComment={this.handleComment}/>
        </div>
      </BottomSection>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
