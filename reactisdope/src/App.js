import React from 'react';
import NameHeader from './components/nameHeader';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
          <NameHeader />
      </div>
    </BrowserRouter>
  );
}

export default App;
