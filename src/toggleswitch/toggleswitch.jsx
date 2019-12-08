import React from 'react';

class ToggleSwitch extends React.Component {
  constructor() {
    super();
    this.state = { switch: false };
  }

  handleClick() {
    this.setState({ switch: !this.state.switch });
  }

  render() {
    if (this.state.switch) {
      return (
        <div>
          <div onClick={this.handleClick.bind(this)} className='toggle toggle-on'>
            <div className="switch switch-on"></div>
          </div>
          <div className="status">ON</div>
        </div>
      );
    }

    return (
      <div>
        <div onClick={this.handleClick.bind(this)} className='toggle'>
          <div className="switch"></div>
        </div>
        <div className="status">OFF</div>
      </div>
    );
  }
}

export default ToggleSwitch;
