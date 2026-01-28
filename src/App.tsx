import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useState, useEffect, lazy, Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import VideoSplash from './components/VideoSplash';
import IntroVideo from './Assets/Videos/IntroVideo.mp4';

// Lazy load pages
const Homepage = lazy(() => import('./pages/Homepage'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Benefits = lazy(() => import('./pages/Benefits'));
const Projects = lazy(() => import('./pages/Projects'));
const Products = lazy(() => import('./pages/Products'));
const Career = lazy(() => import('./pages/SubPages/Career'));
const NoPageFound = lazy(() => import('./pages/NoPageFound'));

const App: React.FC = () => {
  const [showVideoSplash, setShowVideoSplash] = useState(false);

  useEffect(() => {
    const videoPlayedInThisTab = sessionStorage.getItem('videoSplashPlayed');
    const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const isPageRefresh = navigationEntries.length > 0 && navigationEntries[0].type === 'reload';

    if (isPageRefresh) {
      setShowVideoSplash(false);
    } else if (!videoPlayedInThisTab) {
      setShowVideoSplash(true);
    } else {
      setShowVideoSplash(false);
    }
  }, []);

  const handleVideoClose = () => {
    setShowVideoSplash(false);
    sessionStorage.setItem('videoSplashPlayed', 'true');
  };

  return (
    <BrowserRouter>
      {showVideoSplash && (
        <VideoSplash
          videoSrc={IntroVideo}
          duration={10}
          onClose={handleVideoClose}
        />
      )}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about/careers" element={<Career />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </Suspense>

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
        limit={3}
      />
    </BrowserRouter>
  );
};

export default App;
