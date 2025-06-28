import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center h-screen bg-black text-gold text-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to Royal Dine</h1>
      <p className="text-lg mb-8">Experience the luxury of effortless ordering at your table.</p>
      <Link to="/scan">
        <button className="bg-gold text-black px-6 py-3 rounded-full text-lg hover:scale-105 transition-all">
          Scan to Start Ordering
        </button>
      </Link>
    </motion.section>
  );
};

export default Home;