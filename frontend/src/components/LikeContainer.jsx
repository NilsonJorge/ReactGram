import './LikeContainer.css'

import {BsHeart, BsHeartFill} from 'react-icons/bs'

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
            </>
        ) }
    </div>
  )
}

export default LikeContainer