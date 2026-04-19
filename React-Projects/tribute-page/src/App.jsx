import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Achievements from './components/Achievements';
import PersonalInfo from './components/PersonalInfo';
import FilmfareAwards from './components/FilmfareAwards';
import { Honours } from './data';

function App() {
  return (
    <div className="bg-light min-vh-100 pb-5">
      <Header />
      <HeroSection />
      
      <div className="container shadow-lg bg-white p-5 rounded-4 mt-n5 position-relative">
        <PersonalInfo />
        <hr className="my-5" />
        <Achievements Honours={Honours} />
        <hr className="my-5" />
        <FilmfareAwards />
      </div>

      <footer className="text-center mt-5 py-4 border-top text-secondary">
        <p className="mb-0">Built with React | Vedant Agale</p>
      </footer>
    </div>
  );
}

export default App;