import React from "react";
import PropTypes from "prop-types";
import Comment from './Comment'


class CommentSection extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    }
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) =>
          <Comment key={this.index} comment={comment} />
        )}
      </div>
    );
  }
};


CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
}


export default CommentSection;
