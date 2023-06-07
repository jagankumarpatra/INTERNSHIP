// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Card from "./components/card";


function App() {
  const arr =[
    {
      email: "ip@gmail.com",
      profile: "https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg",
    },
    {
      email: "ip@gmail.com",
      profile: "https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg",
    },{
      email: "ip@gmail.com",
      profile: "https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg",
    }

  ];
  return(
    <div>
    <Navbar/>
    {arr.map((el) => {
      return(
        <Card
    username={el.email}
    image = {el.profile} />
      );
    })

    }
    </div>
  );
  
}

export default App;