import React from 'react';
import Navbar from './components/navbar/Navbar';

const App: React.FC = () => {


  return (
    <div className="App">
      <Navbar/>
      <div className="h-screen">
          <div className="text-4xl">Majd</div>
      </div>
    </div>
  );
};

export default App;
