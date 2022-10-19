import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Men from './men/Men.js'
import Women from './women/Women.js'
import Cap from './cap/Cap.js'
import Shoes from './shoes/Shoes.js'
import Newproduct from './22fw/Newproduct.js'

function Navbar() {
  return (
    <div className="nav">
      <ul id="kategorie">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/men">MEN</Link></li>
        <li><Link to="/women">WOMEN</Link></li>
        <li><Link to="/shoes">SHOES</Link></li>
        <li><Link to="/cap">CAP</Link></li>
        <li><Link to="/22fw">22FW</Link></li>

        <ul id="login">
          <li>장바구니</li>
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
        <Route path="/men" element={ <Men/>} />
        <Route path="/women" element={ <Women/>} />
        <Route path="/shoes" element={ <Shoes/>} />
        <Route path="/cap" element={ <Cap/>} />
        <Route path="/22fw" element={ <Newproduct/>} />
      </Routes>
    </div>
  );
}

export default App;
