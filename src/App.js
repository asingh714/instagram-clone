import React from "react";

import withAuthenticate from "./authentication/withAuthenticate";
import PostsPage from "./PostContainer/PostsPage";
import Login from "./Login/Login";


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component {
  render() {
    return <ComponentFromWithAuthenticate />;
  }
}

export default App;
