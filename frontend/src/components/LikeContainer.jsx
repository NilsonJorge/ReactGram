import './LikeContainer.css'

import {BsHeart, BsHeartFill} from 'react-icons/bs'
import { FaRegCommentDots } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LikeContainer = ({photo, user, handleLike, handleDesLike}) => {
  return (
    <div className='like'>
        {photo.likes && user && (
            <>
                
                {photo.likes.includes(user._id) ? (
                    <BsHeartFill onClick={() => handleDesLike(photo)}/>
                ) : (
                    <BsHeart onClick={() => handleLike(photo)}/>
                )}
                <p>{photo.likes.length} like(s)</p>

                <Link to={`/photos/${photo._id}`}>
                    <FaRegCommentDots/> 
                </Link>
            </>
        ) }
    </div>
  )
}

export default LikeContainer