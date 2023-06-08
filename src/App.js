import './App.css';
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      <Card
        author={{
          name: "João Víctor Nicacio Basílio",
          avatarUrl: "https://avatars.githubusercontent.com/nicaciobasilio",
        }}
        text="Existem as soluções que funcionam e as melhores soluções."
        date="18/02/1997"
      />
    </div>
  );
}

export default App;
