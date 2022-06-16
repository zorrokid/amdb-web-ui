import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Movies from './features/movies/Movies';
import Releases from './features/releases/Releases';
import MovieDetails from './features/movies/MovieDetails';
import ReleaseDetails from './features/releases/ReleaseDetails';
import './App.scss';
import MovieForm from './features/movies/MovieForm';
import AddMovieForm from './features/movies/AddMovieForm';
import { ErrorBoundary } from './components/ErrorBoundary';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
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
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
