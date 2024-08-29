import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
