import React, { SyntheticEvent } from "react";
import useStore from "../store";

export default function CreatePostSection() {
  const aNewPost = useStore((store) => store.aNewPost);
  const selectedUserId = useStore((store) => store.selectedUserId);

  const handleCreateNewPostSubmit = (e: any) => {
    e.preventDefault();
    if (!selectedUserId) return;
    let newPost = {
      title: e.target.title.value,
      content: e.target.content.value,
      image: {
        src: e.target.image.value,
        alt: e.target.title.value,
      },
      likes: 0,
      userId: selectedUserId,
      comments: [],
    };

    aNewPost(newPost);
    e.target.reset();
  };

  return (
    <section className="create-post-section">
      <form
        id="create-post-form"
        autoComplete="off"
        onSubmit={handleCreateNewPostSubmit}
      >
        <h2>Create a post</h2>
        <label htmlFor="image">Image</label>
        <input id="image" name="image" type="text" />
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows={2}
          maxLength={30}
        ></textarea>
        <div className="action-btns">
          <button id="preview-btn" type="button">
            Preview
          </button>
          <button type="submit">Post</button>
        </div>
      </form>

      <div className="post"></div>
    </section>
  );
}
