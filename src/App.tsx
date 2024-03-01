import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='history' element={<HistoryPage />} />
        <Route path='*' element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
