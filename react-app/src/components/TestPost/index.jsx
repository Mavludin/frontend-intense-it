import s from './style.module.css'

export const TestPost = () => {
  return (
    <div
      className={`${s.posts} posts`}
    >
      <button>Click</button>
    </div>
  );
};
