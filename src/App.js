import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Mediatain BDD learning platform. <br />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="Link-div">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Behavior-driven_development"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn BDD
          </a> 
          <a
            className="App-link"
            href="https://cucumber.io/docs/cucumber/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Cucumber
          </a>              
        </div>
      </header>
    </div>
  );
}

export default App;
