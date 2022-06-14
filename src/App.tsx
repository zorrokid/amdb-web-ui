import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Movies from './components/Movies';
import Releases from './components/Releases';
import MovieDetails from './components/MovieDetails';
import ReleaseDetails from './components/ReleaseDetails';
import './App.scss';
import MovieForm from './components/MovieForm';
import AddMovieForm from './components/AddMovieForm';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/edit" element={<MovieForm />} />
        <Route path="/movies/add" element={<AddMovieForm />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/releases/:id" element={<ReleaseDetails />} />
      </Routes>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
