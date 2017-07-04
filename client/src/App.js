import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {blogs: []}

  componentDidMount() {
    fetch('/test')
    .then(res => res.json())
    .then(blog => {
       this.setState({blogs: blog})
        console.log(this.state.blogs);       
    })

  }
  render() {
    return (
      <div>
          {this.state.blogs.map(blog => (
              <div>
                <h1>{blog.title}</h1>
                <p>{blog.content}</p>
              </div>
          ))
          }
      </div>
    );
  }
}
export default App;