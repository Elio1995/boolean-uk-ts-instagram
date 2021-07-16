import create from "zustand";
import PostSection from "./components/PostSection";

type User = {
  id: number;
  username: string;
  avatar: string;
};

type Comment = {
  id: number;
  content: string;
  userId: number;
  postId: number;
};

export type Post = {
  id: number;
  title: string;
  content: string;
  image: {
    src: string;
    alt: string;
  };
  likes: number;
  userId: number;
  comments: Comment[];
};

type Store = {
  users: User[];
  fetchUsers: () => void;
  selectedUserId: number | null;
  getSelectedUserId: (id: number) => void;
  posts: Post[];
  fetchPosts: () => void;
  aNewPost: (arg: {
    title: string;
    content: string;
    image: {
      src: string;
      alt: string;
    };
    likes: number;
    userId: number;
    comments: Comment[];
  }) => void;
  addLikeInPost: (id: number, likes: number) => void;
};

const useStore = create<Store>((set, get) => ({
  users: [],
  fetchUsers() {
    fetch(`http://localhost:4000/users`)
      .then((resp) => resp.json())
      .then((user) => set({ users: user }));
  },
  selectedUserId: null,
  getSelectedUserId: (id) => {
    set({ selectedUserId: id });
  },
  posts: [],
  fetchPosts() {
    fetch(`http://localhost:4000/posts`)
      .then((resp) => resp.json())
      .then((post) => set({ posts: post }));
  },

  aNewPost: (newPost) => {
    fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((addNewPostFromServer) => {
        set({ posts: [addNewPostFromServer, ...get().posts] });
      });
  },
  addLikeInPost: (postId, likes) => {
    fetch(`http://localhost:4000/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes }),
    })
      .then((response) => response.json())
      .then((postFromServer) => {
        let updateData = get().posts.map((target) => {
          if (target.id === postFromServer.id) {
            return { ...postFromServer, comments: target.comments };
          } else return target;
        });
        set({ posts: updateData });
      });
  },
}));
export default useStore;
