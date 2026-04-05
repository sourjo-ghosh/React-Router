import React, { use } from 'react';
import Post from '../Post/Post';
import './Posts.css'
const Posts = ({PostPromises}) => {
    const posts = use(PostPromises)
    // console.log(posts)
    return (
        <div className='posts-con'>
            {
                posts.map(post => <Post key={post.UserId} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;




