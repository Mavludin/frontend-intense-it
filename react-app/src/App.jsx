import { useEffect, useState } from "react";
import "./App.css";
import { POSTS_URL, getPosts } from "./api/getPosts";

import heartIconRed from "./assets/heart-red.svg";
import heartIconBlack from "./assets/heart-black.svg";
import deleteIcon from "./assets/delete.svg";
import editIcon from "./assets/edit.svg";

function App() {
  const [posts, setPosts] = useState([]);

  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  const likePost = async (post) => {
    //
    post.liked = !post.liked;

    const response = await fetch(`${POSTS_URL}/${post.id}`, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // .then((updatedPost) => {
    //   setPosts(posts.map((post) => {
    //     if (post.id === updatedPost.id) {
    //       return updatedPost
    //     }

    //     return post
    //   }))
    // })

    if (!response.ok) return;

    const updatedPost = await response.json();

    setPosts(
      posts.map((post) => {
        if (post.id === updatedPost.id) {
          return updatedPost;
        }

        return post;
      })
    );
    //
  };

  const deletePost = async (id) => {
    const shouldDelete = confirm();

    if (!shouldDelete) return;

    const response = await fetch(`${POSTS_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) return;

    const deletedPost = await response.json();

    setPosts(posts.filter((post) => deletedPost.id !== post.id));
  };

  // const getData = () => {
  //   return new Promise()
  // }

  const handleAddPostSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title: e.target.title.value,
      description: e.target.description.value,
      liked: false,
      thumbnail: "https://loremflickr.com/640/480/people",
    };

    const response = await fetch(POSTS_URL, {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) return;

    const createdPost = await response.json();

    setPosts([...posts, createdPost]);

    e.target.title.value = "";
    e.target.description.value = "";
  };

  const editPost = (post) => {
    setSelectedPost(post);
  };

  const handleEditPostSubmit = async (e) => {
    e.preventDefault();

    const editedPost = {
      title: e.target.title.value,
      description: e.target.description.value,
      // id: selectedPost.id,
      // liked: selectedPost.liked,
      // thubmnail: selectedPost.thubmnail,
    };

    const response = await fetch(`${POSTS_URL}/${selectedPost.id}`, {
      method: "PUT",
      body: JSON.stringify({...selectedPost, ...editedPost}),
      // body: JSON.stringify(editedPost),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) return;

    const editedPostFromServer = await response.json();

    setPosts(
      posts.map((post) => {
        if (post.id === editedPostFromServer.id) {
          return editedPostFromServer;
        }

        return post;
      })
    );

    e.target.title.value = "";
    e.target.description.value = "";
  };

  return (
    <div className="app">
      <section className="forms">
        <form onSubmit={handleAddPostSubmit} name="addPost">
          <h2>Создание нового поста</h2>
          <div>
            <input type="text" name="title" required />
          </div>
          <div>
            <textarea name="description" cols="30" rows="10" required />
          </div>

          <div>
            <button>Создать новый пост</button>
          </div>
        </form>

        <form onSubmit={handleEditPostSubmit} name="editPost">
          <h2>Редактирование поста</h2>
          <div>
            <input type="text" name="title" defaultValue={selectedPost?.title} required />
          </div>
          <div>
            <textarea name="description" defaultValue={selectedPost?.description} cols="30" rows="10" required />
          </div>

          <div>
            <button>Сохранить</button>
          </div>
        </form>
      </section>

      <div className="posts">
        <h1>Posts</h1>

        {posts.map((post, index) => {
          return (
            <div className="post" key={post.id}>
              <div className="thumbnail">
                <img src={post.thumbnail} alt={post.title} />
              </div>

              <h3 className="title">
                {index + 1}. {post.title}
              </h3>

              <p className="description">{post.description}</p>
              <div className="actions">
                <button onClick={() => likePost(post)}>
                  {post.liked && (
                    <img className="heart" src={heartIconRed} alt="Heart" />
                  )}

                  {!post.liked && (
                    <img className="heart" src={heartIconBlack} alt="Heart" />
                  )}
                </button>

                <button onClick={() => deletePost(post.id)}>
                  <img className="trash" src={deleteIcon} alt="Trash" />
                </button>

                <button onClick={() => editPost(post)}>
                  <img className="edit" src={editIcon} alt="Pen" />
                </button>
              </div>

              {index !== posts.length - 1 && <hr />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
