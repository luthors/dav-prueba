import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Crud from './components/Crud';
import Navbar from './components/Navbar';




function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Crud/>
    
    </BrowserRouter>
    
  );
}

export default App;
