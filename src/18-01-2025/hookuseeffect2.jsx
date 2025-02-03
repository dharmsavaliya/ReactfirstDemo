import React, { useState, useEffect } from "react";

const images = [
  "https://via.placeholder.com/400x200/FF5733/FFFFFF?text=Image+1",
  "https://via.placeholder.com/400x200/33FF57/FFFFFF?text=Image+2",
  "https://via.placeholder.com/400x200/3357FF/FFFFFF?text=Image+3",
  "https://via.placeholder.com/400x200/FF33A1/FFFFFF?text=Image+4"
];

const ImageChanger = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} width="400" height="200" />
    </div>
  );
};

export default ImageChanger;
