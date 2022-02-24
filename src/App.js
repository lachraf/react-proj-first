import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { FormSlide } from './components/FormSlide';
import { Tableee } from './components/Tableee';
import { Formm } from './components/Formm';
function App() {
  return (
    <div className="App">
      <h1>React JS</h1>
      <NavBar/>
      <FormSlide/>
      <h2>Students Names</h2>
<Tableee/>
      <Formm/>
    </div>
  );
}

export default App;
