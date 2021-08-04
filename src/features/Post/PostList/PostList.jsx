import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { deletePost } from '../postSlice';

function PostList() {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const postList = useSelector((state) => state.posts);

  const handleDeletePost = (postId) => {
    const action = deletePost(postId);
    dispatch(action);
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <Link to={`${match.url}/create`}>
        <button className="btn btn-primary">New Post</button>
      </Link>
      <ul>
        {postList.map((post) => {
          return (
            <div key={post.id} style={{ display: 'flex' }}>
              <Link to={`${match.url}/detail/${post.id}`}>
                <li>{post.title}</li>
              </Link>
              <button
                style={{ marginLeft: '10px' }}
                className="btn-danger"
                onClick={() => handleDeletePost(post.id)}
              >
                x
              </button>
            </div>
          );
        })}
      </ul>
      <div>{postList.length === 0 ? 'No data' : ''}</div>
    </div>
  );
}

export default PostList;
