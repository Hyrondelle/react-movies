import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Best from './pages/Best';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/best" exact element={<Best/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
