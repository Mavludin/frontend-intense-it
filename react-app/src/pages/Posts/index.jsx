import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, getPosts } from "../../store/posts";
import { Alert, Button, Popconfirm } from "antd";
import { QuestionCircleOutlined } from '@ant-design/icons';

export const Posts = () => {
  const dispatch = useDispatch()

  const posts = useSelector((state) => {
    return state.posts.list
  })

  const loading = useSelector((state) => {
    return state.posts.loading
  })

  const error = useSelector((state) => {
    return state.posts.error
  })

  console.log(posts)

  // useEffect(() => {
  //   dispatch(setPosts([
  //     1, 2, 3, 3, 4, 5, 6,
  //   ]))
  // }, [])

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((posts) => dispatch(setPosts(posts)));
  // }, []);

  useEffect(() => {
    dispatch(getPosts())
  }, []);

  if (loading) return (
    <h1>Loading data...</h1>
  )

  console.log({ error })

  if (error !== null) return (
    <Alert
      message="Ошибка"
      description={error}
      type="error"
      showIcon
    />
  )

  const onDeletePost = (id) => {
    dispatch(deletePost(id))
  }

  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            <Popconfirm
              title="Удаление поста"
              description="Вы уверены, что хотите удалить этот пост?"
              icon={
                <QuestionCircleOutlined
                  style={{
                    color: 'red',
                  }}
                />
              }
              onConfirm={() => onDeletePost(post.id)}
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </li>
        );
      })}
    </ul>
  );
};
