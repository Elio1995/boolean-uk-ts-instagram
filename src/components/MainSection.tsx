import React from "react";
import CreatePostSection from "./CreatePostSection";
import FeedList from "./FeedList";

export default function MainSection() {
  return (
    <main className="wrapper">
      <CreatePostSection />

      <FeedList />
    </main>
  );
}
