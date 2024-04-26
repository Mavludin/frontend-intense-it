import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export const Post = () => {
  const { id } = useParams()

  const [post, setPost] = useState(null);

  const location = useLocation();

  const navigate = useNavigate();

  console.log({ location })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      navigate('/contact')
    }, 5000)
  }, [])

  if (post === null) return (
    <p>Loading data...</p>
  )

  return (
    <div className='post'>
      <h1>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  )
}
