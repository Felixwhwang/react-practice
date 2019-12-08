import React from 'react';

class Ticking extends React.Component {
  constructor() {
    super();
    this.state = {
      curTime: new Date().toLocaleTimeString(),
      intervalId: null
    };
  }

  render() {
    setInterval(() => {
      this.setState({ curTime: new Date().toLocaleTimeString()});
    }, 1000);
    return (
      <div className='container'>
        <h1>Current Local Time</h1>
        <div className='current-time'>{this.state.curTime}</div>
      </div>
    );
  }
}

export default Ticking;
