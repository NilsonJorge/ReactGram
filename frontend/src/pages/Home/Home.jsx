import React from 'react'
import "./Home.css"

//Components
import LikeContainer from '../../components/LikeContainer'
import PhotoItem from '../../components/PhotoItem'
import { Link } from 'react-router-dom'

//Hooks
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {useResetComponentMessage} from '../../hooks/useResetComponentMessage';

//redux
import { getPhotos, like, desLike } from '../../slices/photoSlice'


const Home = () => {
  const dispatch = useDispatch()

  const resetMessage = useResetComponentMessage(dispatch);

  const {user} = useSelector((state) => state.auth)
  const {photos, loading } = useSelector((state) => state.photo)

  //Load all photos
  useEffect(() => {
    dispatch(getPhotos())
  },[dispatch]);

  //Like a photo
  const handleLike = (photo) => {
    dispatch(like(photo._id))
    resetMessage()
  }

  //DesLike a photo
  const handleDesLike = (photo) => {
    dispatch(desLike(photo._id))
    resetMessage()
  }
  if(loading){
    return <p>Carregando...</p>
  }

  return (
    <div id='home'>
      {photos && photos.map((photo) => (
        <div id = "photos-home" key={photo._id}>
          <PhotoItem photo={photo}/>
          <LikeContainer photo={photo} user={user} handleLike={handleLike} handleDesLike={handleDesLike}/>
          
        </div>
      ))}
      <div className="no-photos">
        {photos && photos.length === 0 && (
          <h2>Ainda não há fotos publicadas, <Link to={`/users/${user._id}`}>clique aqui</Link></h2>
        )}
      </div>
      
    </div>
  )
}

export default Home