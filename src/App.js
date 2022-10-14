import './App.css';

function Navbar() {
  return (
    <nav>
      <ul id="kategorie">
        <li><a href="#">HOME</a></li>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>SHOES</li>
        <li>CAP</li>
        <li>22FW</li>

        <ul id="login">
          <li>장바구니</li>
          <li>LOGIN</li>
      </ul>
      </ul>
    </nav>
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
      <Capital/>
      <footer>
        <ul>
          <li>대표: 김영은</li>
          <li>문의: 010-9924-7651</li>
          <li>계좌번호: 농협 351-1024-3710-03</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
