import React from 'react';
import spin from './image/spinner.gif'

function Spinner() {
    return (
        <>
          <img src={spin} alt="Loading" style={ {width:'200px', margin:'auto', display:'block'} }/>  
        </>
    )
}

export default Spinner
