import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPostsRequest } from "../../redux/posts/postActions";

const PostSaga = () => {
  const [postId, setPostId] = useState("");
  const { loading, error, data } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsRequest(1));
  }, [dispatch]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <h1>Redux-Saga middleware</h1>
      <input
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={() => dispatch(fetchPostsRequest(postId))}>
        get post
      </button>
      {loading ? (
        <h2>Loading ...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <section>
          <h2>post dataId:{data.id}</h2>
          <h3>title : {data.title}</h3>
          <div>body : {data.body}</div>
        </section>
      )}
    </div>
  );
};

export default PostSaga;
