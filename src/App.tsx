import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './pages/Homepage';
import NoPageFound from './pages/NoPageFound';
import AboutUs from './pages/AboutUs';
import Benefits from './pages/Benefits';
import Projects from './pages/Projects';
import Products from './pages/Products';
import Career from './pages/SubPages/Career';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about/careers" element={<Career />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="border-l-4 border-green-500 bg-green-50 shadow-lg"
      />
    </BrowserRouter>
  );
};

export default App;
