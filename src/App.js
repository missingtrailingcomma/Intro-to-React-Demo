import React from 'react';

class Rating extends React.Component {
  render() {
    return <div>{'Rating: ' + '🌟'.repeat(this.props.count)}</div>
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 1,
    }
  }

  render() {
    return (
      <div>
        <Rating
          count={this.state.counter}
        />
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Up Vote
        </button>
      </div>
    );
  }
}

export default App;
