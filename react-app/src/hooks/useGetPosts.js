import { useEffect, useState } from "react";
import { getPosts } from "../api/getPosts";

export const useGetPosts = () => {
  const [posts, setPosts] = useState([]);

  // const data = useSomeHook() Можно использовать и другие кастомные хуки

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  return { posts, setPosts };
};

// const { posts: posts1 } = useGetPosts()

// const { posts: posts2 } = useGetPosts()

// console.log(posts1 === posts2) // false
