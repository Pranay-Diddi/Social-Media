import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...currentPostList];
    case "DELETE_POST":
      return currentPostList.filter((post) => post.id !== action.payload);
    default:
      return currentPostList;
  }
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Travelling",
    body: "Going to London for Masters",
    reactions: 2,
    userId: "Pranay",
    tags: ["future", "responsibility"],
  },
  {
    id: "2",
    title: "Dancing",
    body: "Love to Dance",
    reactions: 4,
    userId: "Sanju",
    tags: ["Hobby"],
  },
];

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (
    currentUserId,
    currentPostTitle,
    currentPostBody,
    currentPostreactions,
    currentPostTags
  ) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: currentUserId,
        title: currentPostTitle,
        body: currentPostBody,
        reactions: currentPostreactions,
        tags: currentPostTags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: postId });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
