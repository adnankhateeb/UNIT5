import logo from './logo.svg';
import './App.css';

function App() {
  const links = ['Services', 'Projects', 'About'];
  const mOS = ['Android', 'Blackberry', 'iPhone', 'Windows Phone'];
  const mMan = ['Samsung', 'HTC', 'Micromax', 'Apple'];
  return (
    <div className="App">
      <div className="navbar">
        <Logo />
        <div className="links">
          {links.map((e) => {
            return <Links link={e} />;
          })}
        </div>
        <Button />
      </div>
      <div className="card">
        <h2>Mobile Operating System</h2>
        <ul>
          {mOS.map((e) => {
            return <List title={e} />;
          })}
        </ul>
      </div>
      <div className="card">
        <h2>Mobile Manufacturers</h2>
        <ul className="hollow">
          {mMan.map((e) => {
            return <List title={e} />;
          })}
        </ul>
      </div>
    </div>
  );
}

const Logo = () => {
  return <img src={logo} alt="" className="App-logo" />;
};
const Links = (props) => {
  return <a href="/">{props.link}</a>;
};
const Button = () => {
  return <button>Contact</button>;
};
const List = (props) => {
  return <li>{props.title}</li>;
};

export default App;
