import React, { useEffect, useState } from 'react';
import Player from './components/Player';
import MusicList from './components/MusicList';
import './styles/App.css';
import axios from 'axios';
import { IMusicItem } from './model';


function App() {
 const [data, setData] = useState<any>();
 const [item, setItem] = useState<IMusicItem>();

 useEffect(() =>{
    const fetchPosts = async () =>{
      const res = await axios.get("https://music-player-cb240-default-rtdb.firebaseio.com/.json")
      // .then(({data})=>{
      //    return Object.keys(data);
      // }).then(key=>{
      //     return axios.get(`https://music-player-cb240-default-rtdb.firebaseio.com/${key}.json`)
      // })
      setData(res?.data)
  }
  fetchPosts()
}, [])

  return (
    <div className="App">
      <header className="App-header">
      <h1>Music App</h1>
      </header>
      <main>
        <Player item={item}/>
        <MusicList data={data} choosed={(item:IMusicItem) => setItem(item)}/> 
      </main>
    </div>
  );
}

export default App;
