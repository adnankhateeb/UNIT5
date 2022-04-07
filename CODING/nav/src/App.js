import logo from './logo.svg';
import './App.css';

function App() {
  const links = ['Services', 'Projects', 'About'];
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

export default App;
