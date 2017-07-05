import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {blogs: []}

  componentDidMount() {
    fetch('/api/blog')
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
                <h3>{blog.date}</h3>
                <p>{blog.content}</p>
              </div>
          ))
          }
      </div>
    );
  }
}
export default App;