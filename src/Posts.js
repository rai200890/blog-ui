import React from 'react';
import { Container, Table } from 'reactstrap';
import { pseudoRandomBytes } from 'crypto';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  async componentDidMount() {
    let rawResponse = await fetch("http://localhost:3000/api/posts")

    if (rawResponse.ok) {
      let posts = await rawResponse.json()

      this.setState({ posts: posts["data"] })
    }
  }

  render() {
    let listItems = this.state.posts.map((post) =>
      <tr key={post.id}>
        <td>{post.id}</td>
        <td>{post.title}</td>
      </tr>
    )
    return (
        <Table hover bordered dark condensed>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {listItems}
          </tbody>
        </Table>
    );
  }
}

export default Posts