import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setPosts } from "../../store/posts";

export const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => {
    return state.posts.list
  })

  console.log(posts)

  // useEffect(() => {
  //   dispatch(setPosts([
  //     1, 2, 3, 3, 4, 5, 6,
  //   ]))
  // }, [])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => dispatch(setPosts(posts)));
  }, []);

  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
