
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-[#1877F2] flex items-center justify-center z-50"
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-[#1877F2] flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2
        }}
        className="text-center"
      >
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <span className="text-3xl font-bold text-[#1877F2]">E</span>
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white text-2xl font-bold"
        >
          E-Commerce
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-white/80 text-sm mt-2"
        >
          Discover Amazing Deals
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
