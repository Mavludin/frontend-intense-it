import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { API_URL, deletePost } from '../../store/posts';
import { useDispatch } from 'react-redux';

export const Post = () => {
  const { id } = useParams()

  const [post, setPost] = useState(null);

  const location = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  console.log({ location })

  useEffect(() => {
    fetch(`${API_URL}/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  const onDelete = () => {
    fetch(`${API_URL}/posts/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        navigate(-1)
      })
  }

  // dispatchEvent(increment())
  // dispatchEvent(incrementByAmount(5))
  // dispatchEvent(incrementByAmount(10))
  // dispatchEvent(incrementByAmount(100))
  // dispatchEvent(incrementByAmount(-1000))

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/contact')
  //   }, 5000)
  // }, [])

  if (post === null) return (
    <p>Loading data...</p>
  )

  return (
    <div className='post'>
      <h1>
        {post.title}
      </h1>
      <p>{post.description}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}
