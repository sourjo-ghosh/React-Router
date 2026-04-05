import React, { use } from 'react';
import './Showpostdetails.css'
const ShowPostDetails = ({ ShowDetailsPromises }) => {
    const ShowDetailsData = use(ShowDetailsPromises)
    const {id, body} = ShowDetailsData
    // console.log(ShowDetailsData)
    return (
        <div className='Info-con'>
            <p>{id}</p>
            <p>{body}</p>
        </div>
    );
};

export default ShowPostDetails;