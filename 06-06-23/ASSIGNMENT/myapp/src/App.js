import './App.css';
import Card from './components/card';

function App() {
  const arr = [
    {
      name: "Anwesh ",
      image: "https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg"
    },
    {
      name: "A Moharana",
      image: "https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg"
    }
  ];

  return (
    <div>
      {arr.map((el, index) => (
        <Card
          key={index} // Assigning the index as the key
          username={el.name}
          image={el.image}
        />
      ))}
    </div>
  );
}

export default App;
