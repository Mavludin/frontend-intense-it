import { useState } from "react";

export const ShowMoreText = () => {
  const [showMore, setShowMore] = useState(true);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  
  return (
    <div>
      <button onClick={toggleShowMore}>Show more</button>

      {showMore && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem cum
          iure ipsa modi iusto eligendi, architecto accusamus in, animi qui eum
          officia suscipit quibusdam, totam laborum ipsam error ea aspernatur!
        </p>
      )}
    </div>
  );
};
