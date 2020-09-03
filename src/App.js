import React from 'react';
import './App.css';
import Burger from './Burger/Burger'

class App extends React.PureComponent {
  state = {
    isOpen: true,
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="App">
        <Burger isOpen={isOpen} onClick={this.handleClick} />
      </div>
    );
  }
}


export default App;
