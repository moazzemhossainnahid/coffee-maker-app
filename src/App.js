import { Route, Routes } from 'react-router-dom';
import './App.css';
import MakeCoffee from './Pages/MakeCoffee/MakeCoffee';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MakeCoffee/>} />
      </Routes>
    </div>
  );
}

export default App;
