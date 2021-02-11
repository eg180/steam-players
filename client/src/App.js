import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';

// function url(path) {
//   return process.env.NODE_ENV === "development" ?
//   `http://localhost:1234${path}` : path


// }
const friends = ['76561197970485587', '76561198315462253']
const myKey = 'C5FF546B0E2C25F709888DE7C081ABE9'


function App() {
  const [data, setData] = useState([])
  const [friendIDs, setFriendIDs] = useState(friends)


  useEffect(() => {
    axios.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${myKey}&steamids=${friendIDs}`)
    .then(res => {
      setData(data)
      
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  // useEffect(() => {

  //   fetch(url("/api/"))
  //   .then(res => {
  //     res.json()
  //   })
  //   .then(apiData => {
  //     setData(apiData.data)
  //   })
  // }, []);

  



  return (
    <div className="App">
      <header className="App-header">
        <h2>API DATA: {data}</h2>
      </header>
    </div>
  );
}

export default App;
