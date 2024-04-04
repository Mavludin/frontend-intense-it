import { useGetPosts } from "../../hooks/useGetPosts";

export const Dashboard = () => {
  const { posts } = useGetPosts();

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="posts">
        {posts.map((post, index) => {
          return (
            <div key={post.id} className="post">
              <h3 className="title">
                {index + 1}. {post.title}
              </h3>

              <p className="description">{post.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
