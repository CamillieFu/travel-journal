import logo from './logo.svg';
import './css/App.css';
import Card from "./components/Card"
import Header from './components/Header';
import data from './data'
// import MainComponent from './components/MainComponent';

function App() {
  console.log(data)
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
        <div className="travel-cards-list">
          {cards}
        </div>
    </div>
  );
}

export default App;
