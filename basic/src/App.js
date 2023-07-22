import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'hyoeun'
  const colors = ['red', 'white', 'green', 'black']

  return (
      <>
        <h1>{ `hello, ${name}`}</h1>
        <ul>
          { colors.map(item => <li>{ item }</li>) }
        </ul>
      </>
  );
}

export default App;
