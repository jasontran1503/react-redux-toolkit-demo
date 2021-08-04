import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { deletePost } from '../postSlice';

function PostDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { postId } = useParams();
  const postItem = useSelector((state) => state.posts.find((post) => post.id === Number(postId)));

  const handleDeletePost = (postId) => {
    const action = deletePost(postId);
    dispatch(action);

    history.push('/post');
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <div>{postItem.body}</div>

      <Link to="/post">
        <button className="btn btn-warning">Back</button>
      </Link>

      <Link to={`/post/update/${postId}`}>
        <button className="btn btn-primary" style={{ margin: '0 10px' }}>
          Update this post
        </button>
      </Link>

      <button className="btn btn-danger" onClick={() => handleDeletePost(Number(postId))}>
        Delete this post
      </button>
    </div>
  );
}

export default PostDetail;
