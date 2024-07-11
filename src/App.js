import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import MainContent from './components/MainContent/MainContent';

const App = () => {
  const [showCard, setShowCard] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(false);
    }, 4000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black"> 
        <Header />
        <main className="flex-grow container mx-auto p-4 flex items-center justify-center relative">
          <AnimatePresence>
            {showCard ? (
              <motion.div
                key="card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute flex justify-center items-center h-full w-full"
              >
                <Card />
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="flex justify-center items-center h-full w-full"
              >
                <Routes>
                  <Route path="/" element={<MainContent />} />
                  <Route path="/novia" element={
                    <div className="text-center">
                      <h2 className="text-2xl text-white font-bold">La Novia</h2>
                      <p>Contenido sobre la novia...</p>
                      <Link to="/" className="text-blue-500 hover:underline">Volver</Link>
                    </div>
                  } />
                  <Route path="/novio" element={
                    <div className="text-center">
                      <h2 className="text-2xl text-white font-bold">El Novio</h2>
                      <p>Contenido sobre el novio...</p>
                      <Link to="/" className="text-blue-500 hover:underline">Volver</Link>
                    </div>
                  } />
                  <Route path="/ceremonia" element={
                    <div className="text-center">
                      <h2 className="text-2xl text-white font-bold">Ceremonia</h2>
                      <p>Contenido sobre la ceremonia...</p>
                      <Link to="/" className="text-blue-500 hover:underline">Volver</Link>
                    </div>
                  } />
                  <Route path="/banquete" element={
                    <div className="text-center">
                      <h2 className="text-2xl text-white font-bold">Banquete</h2>
                      <p>Contenido sobre el banquete...</p>
                      <Link to="/" className="text-blue-500 hover:underline">Volver</Link>
                    </div>
                  } />
                </Routes>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
