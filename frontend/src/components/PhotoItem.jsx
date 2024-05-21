import "./PhotoItem.css"
import { api, requestConfig, uploads } from "../utils/config"

import axios from 'axios'

import { useEffect, useState } from "react";

import { useSelector, useDispatch} from 'react-redux';

import {getUserDetails} from '../slices/userSlice'

import { Link } from "react-router-dom"

const PhotoItem = ({photo}) => {
  const {user, loading} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  const [uriPhoto, setUriPhoto] = useState("");

  const config = requestConfig("GET")
  //load user data
  useEffect(() => {
   //dispatch(getUserDetails(photo.userId));
   const getData = async() => {

     const result = await axios.get(`${api}/users/${photo.userId}`, config)
     setUriPhoto(result.data.profileImage);
    }
    getData()
  }, [])

  return (
    <div className="photo-item">
        <div className="photo-author">
            {uriPhoto && (
              <img src={`${uploads}/users/${uriPhoto}`} alt={user.name}/>
            )}
            <Link to={`/users/${photo.userId}`}>{photo.userName}</Link>
        </div>
        <Link to={`/photos/${photo._id}`}>
        {photo.image && (
            <img src={`${uploads}/photos/${photo.image}`} alt={photo.title} />
        )}
        </Link>
        <h2>{photo.title}</h2>
    </div>
  )
}

export default PhotoItem