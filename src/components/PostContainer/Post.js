import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

const Post = props => {
    return (
        <div>
            <img src={props.post.thumbnailUrl} alt="Thumbnail Image" />
            <p>{props.post.username}</p>
            <img src={props.post.imageUrl} alt="Posted Image" />
            <p>{props.post.likes}</p>
            <p>{props.post.timestamp}</p>
            <CommentSection comments={props.post.comments} />
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string
    })
};

export default Post;