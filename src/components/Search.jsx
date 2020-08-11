import React, { useState } from 'react'

function Search(props) {

    const [text, setText] = useState('');

    const onChange = (q) =>{
        setText(q);
        props.pushQuery(q);
    }
    return (
        <section className='search'>
            <form>
                <input type="text" value={text} className='form-control' placeholder='Search Characters' autoFocus
                    onChange={(e) => { onChange(e.target.value) }}
                />
            </form>
        </section>
    )
}

export default Search
