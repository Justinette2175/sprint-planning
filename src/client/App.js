import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    // fetch('/api/sprints')
    //   .then((data) => data.json())
    //   .then((sprints) => {
    //     console.log('sprints are', sprints)
    //   });
    fetch('/api/sprints/5d98e96b1a71c1280b447d31', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        options: { name: 'A new name for this sprint' },
      }),
    })
      .then((data) => data.json())
      .then((sprints) => {
        console.log('sprints are', sprints);
      });
  }

  render() {
    return (
      <div>
        Loading.. please wait!
      </div>
    );
  }
}
