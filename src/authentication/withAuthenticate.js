import React from "react";

const withAuthenticate = PostsPage => Login =>
  class extends React.Component {
    state = {
      loggedIn: false
    };

    componentDidMount() {
      if (localStorage.getItem("user")) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <PostsPage />;
      }
      return <Login />;
    }
  };

export default withAuthenticate;
