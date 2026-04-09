import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import './styles/app.less';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
