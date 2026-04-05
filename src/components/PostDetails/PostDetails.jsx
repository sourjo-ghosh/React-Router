import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import './postDetail.css'
const PostDetails = () => {
    const PostDetail = useLoaderData()
    // console.log(PostDetail)
    const navigate = useNavigate()
    // const params = useParams()
    // console.log(params)
    const {postId} = useParams()
    console.log(postId)
    // const HandleGoBackBtn =()=>{
    //     navigate(`/posts`)
    // }
    return (
        <div>
            <p>
                Post details here
            </p>
            <div className='postdetail-con'>
            {/* <p>{PostDetail.id}</p> */}
            <p>{PostDetail.body}</p>
            <p>{postId}</p>
            </div>
            <button onClick={()=> navigate(-1)}>
                Go back
            </button>
        </div>
    );
};

export default PostDetails;