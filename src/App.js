import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search'

function App() {

  const[items, setItem] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const[query, setQuery] = useState('');


  useEffect( () => {
    const fetchItems = async () =>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItem(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [query]);

  return (
    <>
      <Header />
      <Search pushQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </>
  );
}

export default App;
