import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const InvitationCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', 
        borderRadius: '20px',
        padding: '40px',
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '400px',
        margin: '20px auto',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)'
      }}
    >
      <h1 style={{ fontSize: '2rem', margin: '0' }}>¡Estás Invitado!</h1>
      <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>
        Nos encantaría que nos acompañes en nuestro día especial.
      </p>
      <p style={{ fontSize: '1rem', margin: '5px 0' }}>Fecha: 25 de Diciembre, 2024</p>
      <p style={{ fontSize: '1rem', margin: '5px 0' }}>Lugar: Iglesia Santa María</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          background: '#fff',
          border: 'none',
          borderRadius: '10px',
          padding: '10px 20px',
          cursor: 'pointer',
          fontSize: '1rem',
          color: '#fda085',
          fontWeight: 'bold',
          marginTop: '20px'
        }}
      >
        Confirmar Asistencia
      </motion.button>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
        <Link to="/ceremonia">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: '#fff',
              border: 'none',
              borderRadius: '10px',
              padding: '10px 20px',
              cursor: 'pointer',
              fontSize: '1rem',
              color: '#fda085',
              fontWeight: 'bold'
            }}
          >
            Ceremonia
          </motion.button>
        </Link>
        <Link to="/banquete">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: '#fff',
              border: 'none',
              borderRadius: '10px',
              padding: '10px 20px',
              cursor: 'pointer',
              fontSize: '1rem',
              color: '#fda085',
              fontWeight: 'bold'
            }}
          >
            Banquete
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default InvitationCard;
