import React from 'react';
import './App.css';
import Login from './components/login';
import { useStateValue } from './StateProvider';

//TODO deploy is left
function App() {
  const [{ user }, dispatch] = useStateValue()
  
  return (
    <div className="App">
      {
        user ? (   
          <>

            <div className="app__body">
            </div>
          </>
        ) : (
         
            <Login />
            
          )
      }

    </div>
  );
}

export default App;