import React, { Suspense, useState } from "react";
import "./Post.css";
import { Link, useLocation, useNavigate } from "react-router";
import ShowPostDetails from "../ShowPostDetails/ShowPostDetails";
const Post = ({ post }) => {
  const navigate = useNavigate();
  const handlePostDetailsBtn = () => {
    navigate(`/posts/${post.id}`);
  };
  const [ShowDetails, setShowDetails] = useState(false);
  const ShowDetailsPromises = fetch(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
  ).then((res) => res.json());
  const [TakeHome, setTakeHome] = useState(false);
  if (TakeHome) {
    navigate(`/`);
  }
  const location = useLocation();
  console.log(location);
  return (
    <div className="post-card">
      <p>{post.id}.</p>
      <p>{post.title}</p>
      <Link to={`/posts/${post.id}`}>Post details</Link>
      <button onClick={handlePostDetailsBtn}>Post Details {post.id}</button>
      <button onClick={() => setShowDetails(!ShowDetails)}>
        {ShowDetails ? "Hide details" : "Show details"}
      </button>
      <button onClick={() => setTakeHome(true)}>Go Home</button>
      {ShowDetails && (
        <Suspense fallback={<span>Loading....</span>}>
          <ShowPostDetails
            ShowDetailsPromises={ShowDetailsPromises}
          ></ShowPostDetails>
        </Suspense>
      )}
    </div>
  );
};

export default Post;
