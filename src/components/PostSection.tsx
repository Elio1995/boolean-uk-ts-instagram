import React from "react";

export default function PostSection() {
  return (
    <div className="post">
      <div className="chip active">
        <div className="avatar-small">
          <img
            src="https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg"
            alt="Salvador Dali"
          />
        </div>
        <span>Salvador Dali</span>
      </div>
      <div className="post--image">
        <img
          src="https://images.unsplash.com/photo-1620447875063-19be4e4604bc?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Talk about standing out!"
          height="250"
          width="300"
        />
      </div>
      <div className="post--content">
        <h2>Talk about standing out!</h2>
        <p>What an amazing way to stand out in nature, beautiful colours!</p>
      </div>
    </div>
  );
}
