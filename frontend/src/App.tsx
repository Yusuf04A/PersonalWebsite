import { useEffect } from 'react'; // Tambah useEffect
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import Contact from './pages/Contact';

// IMPORT ANIMASI
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // INISIALISASI ANIMASI SAAT WEBSITE DIBUKA
  useEffect(() => {
    AOS.init({
      duration: 800, // Durasi animasi (ms)
      once: true, // Animasi cuma sekali pas scroll ke bawah
      offset: 100, // Mulai animasi sebelum elemen muncul full
    });
  }, []);

  return (
    <Router>
      <div className="container"> {/* Container sekarang lebih lebar (1280px) */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer style={{ marginTop: '5rem', padding: '2rem 0', borderTop: '1px solid #e5e5e5', textAlign: 'center', color: '#999' }}>
          © {new Date().getFullYear()} Nama Kamu. Built with React & Node.js.
        </footer>
      </div>
    </Router>
  );
}

export default App;