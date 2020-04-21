import React from 'react';
import './css/main.css';

const Header = () => (
  <header className="header grid">
    <h1>Jiffy</h1>
  </header>
)

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState((prevState,  ) => ({
      ...prevState,
      searchTerm: value
    }));
    if ( value.length > 2 ) {
      console.log('this is a valid search term');
    }
  }

  handleKeyPress = event => {
    const { value } = event.target;
    if (value.length > 2 && event.key === 'Enter') {
      alert(`search for ${value}`)
    }
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <div className="page">
        <Header/>
  
        <div className="search grid">
          {/* Stack of gif images */}
          <input 
            className="input grid-item" 
            placeholder="Type something"
            value={ searchTerm }
            onChange={ this.handleChange }
            onKeyPress={ this.handleKeyPress }/>
        </div>
      </div>
    );
  }
}

export default App;
