import React from 'react'
import Header from './components/Nav/Header';
import Ventas from './components/Ventas/Ventas';

function App() {
  return (
      <>
        <Header/>
        
         <div className="container">

              <Ventas/>

         </div>

      </>
  );
}

export default App;
