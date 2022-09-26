
import './App.css';
import Header from './Header';
import Content from'./Content';
import Footer from './Footer';

function App() {
  const name = "Dab";
  

  return (
    <div className="App">
      <Header/>
      <Content/>
      <p>
        My name is {name}.
      </p>
      <Footer/>
    </div>
  );
} 

export default App;
