import React, { useEffect } from "react";
import useStore from "../store";
import FeedSection from "./FeedSection";

export default function FeedList() {
  const fetchPosts = useStore((state) => state.fetchPosts);
  const posts = useStore((state) => state.posts);
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <ul className="stack">
        {posts.map((post) => (
          <FeedSection key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
