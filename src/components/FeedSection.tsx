import React from "react";
import useStore, { Post } from "../store";

type FeedSectionProps = {
  post: Post;
};

export default function FeedSection({ post }: FeedSectionProps) {
  const { id, title, content, image, likes, userId, comments } = post;
  const users = useStore((store) => store.users);
  let userInfo = users.find((target) => target.id === userId);
  const addLikeInPost = useStore((store) => store.addLikeInPost);

  return (
    <li className="post">
      <div className="chip active">
        <div className="avatar-small">
          <img src={userInfo?.avatar} alt={userInfo?.username} />
        </div>
        <span>{userInfo?.username}</span>
      </div>
      <div className="post--image">
        <img src={image.src} alt={image.alt} />
      </div>
      <div className="post--content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className="post--like">
        <span>{likes} likes</span>
        <div
          className="heart"
          onClick={() => {
            addLikeInPost(id, likes + 1);
          }}
        >
          ♡
        </div>
      </div>
      <div className="post--comments">
        <h3>Comments</h3>
        <div className="post--comment">
          <div className="avatar-small">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&amp;usqp=CAU"
              alt="Van Gogh"
            />
          </div>
          <p>What a great photo!!</p>
        </div>
        <div className="post--comment">
          <div className="avatar-small">
            <img
              src="https://www.sartle.com/sites/default/files/images/artist/pablo-picasso-137216-5115406.jpg"
              alt="Picasso"
            />
          </div>
          <p>So beautiful... perfect!</p>
        </div>
        <form id="create-comment-form" autoComplete="off">
          <label htmlFor="comment">Add comment</label>
          <input id="comment" name="comment" type="text" />
          <button type="submit">Comment</button>
        </form>
      </div>
    </li>
  );
}
