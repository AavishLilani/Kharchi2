import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


const FallingImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const newImages = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position
      delay: Math.random() * 5, // Random start time
    }));
    setImages(newImages);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {images.map((img) => (
        <motion.img
          key={img.id}
          src="assets/coin.png"
          alt="falling money"
          className="w-40 absolute "
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: "100vh", opacity: 1 }}
          transition={{
            duration: 4 + Math.random() * 3, // Different falling speeds
            delay: img.delay,
            repeat: Infinity, // Infinite loop
          }}
          style={{ left: `${img.left}%` }}
        />
      ))}
    </div>
  );
};

export default FallingImages;
