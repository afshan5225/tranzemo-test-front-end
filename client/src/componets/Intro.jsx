import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <div className="p-10 text-center mx-auto my-50 max-w-3xl">
      
      <motion.h1
        className="text-9xl font-bold italic text-white mb-5 font-super"
        initial={{ opacity: 0, y: 50 }}      
        animate={{ opacity: 1, y: 0 }}       
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }} 
      >
        ACCEDO
      </motion.h1>

     
      <motion.p
  className="text-2xl font-bold italic bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent tracking-wide drop-shadow-md"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
>
  "...Where management meets modernity."
</motion.p>
    </div>
  );
};

export default Intro;
