import logo from './logo.svg';
import './css/App.css';
import Card from "./components/Card"
import Header from './components/Header';
import data from './data'
// import MainComponent from './components/MainComponent';

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}

      />
    )
  })

  return (
    <div className="App">
        <Header />
        {/* <MainComponent /> */}
        {cards}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
