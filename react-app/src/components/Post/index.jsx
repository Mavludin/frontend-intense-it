import { useGetPostById } from "../../hooks/useGetPostById";

import heartIconRed from "../../assets/heart-red.svg";
import heartIconBlack from "../../assets/heart-black.svg";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";

export const Post = ({ id }) => {
  const post = useGetPostById(id);

  if (post === null) return null;

  return (
    <div className="posts">
      <div className="thumbnail">
        <img src={post.thumbnail} alt={post.title} />
      </div>
      <h3 className="title">{post.title}</h3>
      <p className="description">{post.description}</p>

      <div className="actions">
        <button>
          {post.liked && (
            <img className="heart" src={heartIconRed} alt="Heart" />
          )}

          {!post.liked && (
            <img className="heart" src={heartIconBlack} alt="Heart" />
          )}
        </button>

        <button>
          <img className="trash" src={deleteIcon} alt="Trash" />
        </button>

        <button>
          <img className="edit" src={editIcon} alt="Pen" />
        </button>
      </div>
    </div>
  );
};
