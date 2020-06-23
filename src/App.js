import React, { Component } from 'react';
import SignupForm from './containers/SignupForm';
import { toUnixTimestamp } from './utils/helpers';

class App extends Component {
  handleSubmit = data => {
    const dateOfBirth = toUnixTimestamp(data.year, data.month, data.day);
    let dataToBeSend = { ...data, dateOfBirth };

    try {
      const json = JSON.stringify(
        dataToBeSend,
        (key, value) =>
          ['day', 'month', 'year'].includes(key) ? undefined : value,
        2
      );
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="App">
        <SignupForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
