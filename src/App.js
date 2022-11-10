import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Top from './top/Top.js'
import Topdetail from './top/Topdetail.js'
import Cap from './cap/Cap.js'
import Bottom from './bottom/Bottom.js'
import { useState } from 'react';
import Cart from './Cart';

function Navbar() {
  return (
    <div className="nav">
      <ul id="kategorie">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/top">TOP</Link></li>
        <li><Link to="/bottom">BOTTOM</Link></li>
        <li><Link to="/cap">CAP</Link></li>

        <ul id="login">
          <li><Link to="/cart">장바구니</Link></li>
          <li>LOGIN</li>
      </ul>
      </ul>
    </div>
  )
}
function Capital() {
  return (
    <>
    <div className="newjeans"></div>
    <div className="model">
      <div className="model1"></div>
      <div className="model2"></div>
    </div>
    </>
  )
}

function App() {
 
  const [optionDataLists] = useState([]);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={
        <>
          <Capital/>
          <footer>
            <ul>
              <li>대표: 김영은</li>
              <li>문의: 010-9924-7651</li>
              <li>계좌번호: 농협 351-1024-3710-03</li>
            </ul>
          </footer>
        </>
        } />
        <Route path="/bottom" element={ <Bottom/>} />
        <Route path="/cap" element={ <Cap/>} />
        <Route path="/Cart" element={ <Cart optionDataLists={optionDataLists}/>} />
        <Route path="/top" element={ <Top/>} />
        <Route path="top/detail/:id" element={<Topdetail optionDataLists={optionDataLists}/>}/>
      </Routes>
    </div>
  );
}

export default App;
