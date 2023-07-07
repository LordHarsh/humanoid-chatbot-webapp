import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import logo from './logo.svg';
import './index.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
