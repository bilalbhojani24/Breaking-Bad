import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from './Spinner';

function CharacterGrid({items, isLoading}) {
    return isLoading ?  ( <Spinner />) : 
    
    (
    <section className="cards">
        {
            items.map( (item) => (
                <CharacterItem item = {item} key={item.char_id}/>
            ))
        }
    </section>   
    )
}

export default CharacterGrid
