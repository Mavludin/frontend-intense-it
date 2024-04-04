import { useEffect, useState } from "react";
import { getPostById } from "../api/getPostById";

export const useGetPostById = (id) => {
  const [post, setPost] = useState(null); 

  useEffect(() => {
    getPostById(id).then((data) => setPost(data));
  }, [id]);

  return post;
};
