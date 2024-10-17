import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();
  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const postReactions = useRef();
  const postTags = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const currentUserId = userId.current.value;
    const currentPostTitle = postTitle.current.value;
    const currentPostBody = postBody.current.value;
    const currentPostreactions = postReactions.current.value;
    const currentPostTags = postTags.current.value.split(" ");

    userId.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    postReactions.current.value = "";
    postTags.current.value = " ";

    addPost(
      currentUserId,
      currentPostTitle,
      currentPostBody,
      currentPostreactions,
      currentPostTags
    );
    navigate("/");
  };

  return (
    <form className="create-post" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User Id
        </label>
        <input
          type="text"
          ref={userId}
          className="form-control"
          id="userId"
          placeholder="Sanju"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title of the Post
        </label>
        <input
          type="type"
          ref={postTitle}
          className="form-control"
          id="title"
          placeholder="Travelling..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          type="text"
          ref={postBody}
          className="form-control"
          id="body"
          placeholder="Tell us more about it..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          ref={postReactions}
          className="form-control"
          id="reactions"
          placeholder="Dummy Number..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={postTags}
          className="form-control"
          id="tags"
          placeholder="Chill"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
