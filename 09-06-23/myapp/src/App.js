                                        // PAGINATION DONE USING API
                                        
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card';

function App() {
  const [arr,setArr] = useState([]);
  const [pageArr,setPageArr] = useState([1,2,3,4,5,6,7,8,9,10]);
  const [page,setPage] = useState(1);

  const getData = async () => {
    await fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`,{
      method: "GET",
    })
    .then(res => res.json())
    .then(data => {
      setArr(data.data);
    })
  };

  const handlePage = (el) => {
    setPage(el);
  }

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      {arr.length > 0 ?(
        <div style={{display: 'grid', gridTemplateColumns: "repeat(3,1fr) ", marginTop: "5%"}}>
        {arr.map((el) => {
          return(
            <Card
            passenger = {el.name}
            image = {el.airline[0].logo}
            title = {el.name}
            country = {el.airline[0].country}
            trips = {el.trips} />
          );
        })}
        </div>
      ) : (
        <h1>No Data Found</h1>
      )
      }
      {pageArr.map((el) => {
        return <button onClick={() => handlePage(el)}>{el}</button>
      })}
    </div>
  );
}
export default App;

                               // PAGINATION DONE USING  DB.JSON

// import { useEffect, useState } from "react";
// import './App.css';
// import Card from "./components/card";
// function App() {
//   const [arr, setArr] = useState([]);
//   const [wholearr, setWholeArr] = useState([]);
//   const pageArr = [];
//   let i = 1;
//   while (i <= wholearr.length / 20) {
//     pageArr.push(i);
//     i++;
//   }
//   console.log(pageArr);

//   const [page, setPage] = useState(1);
//   const getData = async () => {
//     await fetch(`https://jsonplaceholder.typicode.com/posts`, {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setWholeArr(data);
//         const end = page * 20;
//         const start = page - 1;
//         const newData = data.slice(start * 20, end);
//         setArr(newData);
//       });
//   };
//   const handlePage = (el) => {
//     setPage(el);
//   };

//   useEffect(() => {
//     getData();
//   }, [page,getData]);
  

//   return (
//     <div className="App">
//       {arr.length > 0 ? (
//         <div
//           style={{
//             display: "grid",
            
//             gridTemplateColumns: "repeat(3,1fr) ",
//             marginTop: "5%",
//           }}
//         >
//           {arr.map((el) => {
//             return <Card userId={el.userId} title={el.title} body={el.body} />;
//           })}
//         </div>
//       ) : (
//         <h1>No Data Found</h1>
//       )}
//       {pageArr.map((el) => {
//         return <button onClick={() => handlePage(el)}>{el}</button>;
//       })}
//     </div>
//   );
// }

// export default App;


