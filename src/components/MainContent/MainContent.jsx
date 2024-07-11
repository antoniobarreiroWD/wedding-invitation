import React from 'react';
import { Link } from 'react-router-dom';
import miriamImg from '../../Assets/allariz_miriam.jpg';
import antonioImg from '../../Assets/allariz_antonio.jpg';
import ceremoniaImg from '../../Assets/Lians.jpg';
import banqueteImg from '../../Assets/montesqueiro.jpg';

const MainContent = () => {
  return (
    <div className="grid grid-cols-2 gap-8 m-4 max-w-xl mx-auto">
      <Link
        to="/novia"
        className="aspect-square rounded-lg shadow-lg overflow-hidden relative"
      >
        <img src={miriamImg} alt="Miriam" className="w-full h-full object-cover" />
        <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold font-dancing-script text-white bg-black bg-opacity-50 p-2 rounded-lg text-center">Miriam</h3>
      </Link>
      <Link
        to="/novio"
        className="aspect-square rounded-lg shadow-lg overflow-hidden relative"
      >
        <img src={antonioImg} alt="Antonio" className="w-full h-full object-cover" />
        <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold font-dancing-script text-white bg-black bg-opacity-50 p-2 rounded-lg text-center">Antonio</h3>
      </Link>
      <Link
        to="/ceremonia"
        className="aspect-square rounded-lg shadow-lg overflow-hidden relative"
      >
        <img src={ceremoniaImg} alt="Ceremonia" className="w-full h-full object-cover" />
        <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold font-dancing-script text-white bg-black bg-opacity-50 p-2 rounded-lg text-center">Ceremonia</h3>
      </Link>
      <Link
        to="/banquete"
        className="aspect-square rounded-lg shadow-lg overflow-hidden relative"
      >
        <img src={banqueteImg} alt="Banquete" className="w-full h-full object-cover" />
        <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold font-dancing-script text-white bg-black bg-opacity-50 p-2 rounded-lg text-center">Banquete</h3>
      </Link>
    </div>
  );
};

export default MainContent;