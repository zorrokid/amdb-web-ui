import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Movies from './components/Movies';
import Releases from './components/Releases';

function App() {
  return (
    <>
      <div>alskdfjls</div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/releases" element={<Releases />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
