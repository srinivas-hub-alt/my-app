import './App.css';
import Card from './components/Card';
import Nav from './components/Nav';
import data from './data.js';

function App() {
  console.log(data);
  const cards = data.map(item => (
    <Card key={item.id} {...item}/>
  ))
  return (
    <div className="App">
      <Nav />
      {cards}
    </div>
  );
}

export default App;
