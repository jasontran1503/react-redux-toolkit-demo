import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PostDetail from './PostDetail/PostDetail';
import PostForm from './PostForm/PostForm';
import PostList from './PostList/PostList';

function Post() {
  const match = useRouteMatch();
  
  return (
    <div>
      <Switch>
        <Route exact path={`${match.url}/detail/:postId`} component={PostDetail}></Route>
        <Route exact path={`${match.url}`} component={PostList}></Route>
        <Route exact path={`${match.url}/create`} component={PostForm}></Route>
        <Route exact path={`${match.url}/update/:postId`} component={PostForm}></Route>
      </Switch>
    </div>
  );
}

export default Post;
