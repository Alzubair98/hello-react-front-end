import './App.css';
import { Routes, Route } from 'react-router-dom';
import Firstcont from './component/greeting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Firstcont />} />
    </Routes>
  );
}

export default App;
