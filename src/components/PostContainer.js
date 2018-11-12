import React from 'react';
import CommentSection from './CommentSection'

const PostContainer = props => {
    return (
    <div>
        {props.postData.map(post => 
            <div>
                <img src={post.thumbnailUrl} alt="Thumbnail Image" />,
                <p>{post.username}</p>
                <img src={post.imageUrl} alt="Posted Image" />
                <p>{post.likes}</p>
                <p>{post.timestamp}</p>
            </div>
        )};
        <CommentSection />
    </div>

    )
}

export default PostContainer;