
import './App.css';
import Header from './Header';

function App() {
  const name = "Dab";
  const handleNameChange = () => {
    const names = ['Bro', 'Dab', 'Ass'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
