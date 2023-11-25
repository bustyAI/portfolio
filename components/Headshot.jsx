"use client"
import React from 'react'
import { useState, useEffect } from 'react'

const Headshot = () => {
  const words = ["Hello there", "My name is Oscar Ochoa", "I enjoy creating websites (:"];
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const totalDuration = 500 * words.length;
    let timer;

    const updateVisibility = () => {
      setVisibleIndex((prev) => (prev + 1) % words.length);
      timer = setTimeout(updateVisibility, 1000);
    };

    timer = setTimeout(updateVisibility, totalDuration);

    return () => clearTimeout(timer);
  }, [words]);

  return (
    <div className='box__frame_container'>
      <div className='blue__frame'>
        <div className='red__frame'>
          <div className={`green__frame text-center flex flex-col `}>
            {words.map((word, index) => (
              <p
                key={index}
                className={`neon__text my-5 text-5xl ${index === visibleIndex ? 'animate-appear' : 'animate-disappear'}`}
              >
                {word}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headshot;