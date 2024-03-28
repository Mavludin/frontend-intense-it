import { useEffect, useState } from "react";
import "./App.css";
import { TimerComponent } from "./components/TimerComponent";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [show, setShow] = useState(false);

  const [posts, setPosts] = useState(null)

  // useEffect(() => {
  //   timerRef.current = setTimeout(() => {
  //     alert('Запустилось через 3 секунды!!!')
  //   }, 3000)

  //   return () => {
  //     clearTimeout(timerRef.current)
  //   }
  // }, [])

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((res) => {
    //     return res.json()
    //   })
    //   .then((data) => {
    //     setPosts(data)
    //   })

    const getPosts = async () => {
      try {
        const response = await fetch(POSTS_URL);

        if (!response.ok) {
          throw new Error('Ошибка при получении постов');
        }

        const data = await response.json();

        setPosts(data)
      } catch (error) {
        console.error(error)
      }
    }

    getPosts()
  }, [])

  return (
    <div className="app">
      {/* <div>
        <button onClick={() => setShow(!show)}>
          {show ? 'Hide' : 'Show'}
        </button>
      </div> */}

      {/* {show && (
        <TimerComponent />
      )} */}


      <div className="posts">
        <h1>Posts</h1>

        {posts?.map((post, index) => {
          return (
            <div key={post.id}>
              <h3>
                {index + 1}. {post.title}
              </h3>
              <p>{post.body}</p>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
