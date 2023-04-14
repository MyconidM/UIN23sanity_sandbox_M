import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Frontpage from './components/Frontpage';
import Show from './components/Show';
import AddShow from './components/AddShow';

function App() {
  return (
    <element>
    <h1>TV-serier</h1>
    <Routes>
      <Route path="/" index element={<Frontpage />} />
      <Route path=":slug" element={<Show />} />
      <Route path="/add-show" element={<AddShow />}/>
    </Routes>
    </element>
  );
}

export default App;
