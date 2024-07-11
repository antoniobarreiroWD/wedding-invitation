import React from 'react';
import { motion } from 'framer-motion';

const Card = () => {
  return (
    <motion.div 
      className="bg-black-gradient p-10 m-4 rounded-lg shadow-lg text-center max-w-xl w-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-4 font-dancing-script text-white">
        <span className="block">Miriam</span>
        <span className="block">&</span>
        <span className="block">Antonio</span>
      </h2>
      <p className="text-2xl font-dancing-script mb-2 text-white">Fecha: 13 de Septiembre, 2025</p>
      <p className="text-2xl font-dancing-script text-white">A Coruña</p>
    </motion.div>
  );
};

export default Card;
