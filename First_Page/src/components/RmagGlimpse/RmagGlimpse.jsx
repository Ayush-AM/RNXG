import React, { useState, useEffect, useRef } from 'react';
import './RmagGlimpse.css';

const RmagGlimpse = () => {
  const [slides, setSlides] = useState([
    { id: 1, content: 'https://picsum.photos/seed/7/400/300' },
    { id: 2, content: 'https://picsum.photos/seed/8/400/300' },
    { id: 3, content: 'https://picsum.photos/seed/9/400/300' },
    { id: 4, content: 'https://picsum.photos/seed/10/400/300' },
    { id: 5, content: 'https://picsum.photos/seed/11/400/300' },
    { id: 6, content: 'https://picsum.photos/seed/12/400/300' },
  ]);
  
  // State to track active index based on screen size
  const [activeIndex, setActiveIndex] = useState(1);
  
  // Update active index based on screen size
  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setActiveIndex(window.innerWidth <= 768 ? 0 : 1);
      }, 100);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
  const intervalRef = useRef(null);
  
  // Function to rotate the slides array for infinite loop effect
  const rotateSlides = () => {
    setSlides(prevSlides => {
      const newSlides = [...prevSlides];
      // Take the first element and move it to the end
      const firstSlide = newSlides.shift();
      newSlides.push(firstSlide);
      return newSlides;
    });
  };
  
  // Drag functionality
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const dragThreshold = 100; // Minimum drag distance to trigger slide change
  const carouselRef = useRef(null);
  
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    clearInterval(intervalRef.current);
  };
  
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    clearInterval(intervalRef.current);
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
  };
  
  const handleTouchMove = (e) => {
    if (!isDragging) return;
  };
  
  const handleMouseUp = (e) => {
    if (!isDragging) return;
    
    const dragDistance = e.clientX - startX;
    handleDragEnd(dragDistance);
  };
  
  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    
    const dragDistance = e.changedTouches[0].clientX - startX;
    handleDragEnd(dragDistance);
  };
  
  const handleDragEnd = (dragDistance) => {
    setIsDragging(false);
    
    // If dragged far enough, change slides
    if (Math.abs(dragDistance) > dragThreshold) {
      if (dragDistance > 0) {
        // Dragged right - move backward
        setSlides(prevSlides => {
          const newSlides = [...prevSlides];
          const lastSlide = newSlides.pop();
          newSlides.unshift(lastSlide);
          return newSlides;
        });
      } else {
        // Dragged left - move forward
        rotateSlides();
      }
    }
    
    // Restart the interval
    try {
      intervalRef.current = setInterval(() => {
        rotateSlides();
      }, 1500);
    } catch (error) {
      console.warn('Failed to restart carousel interval:', error);
    }
  };

  // Auto-rotate slides every 1.5 seconds
  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        rotateSlides();
      }, 1500);
    };

    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Navigation dots removed as requested

  return (
    <div className="rmag-glimpse-container">
      <h2 className="rmag-glimpse-title">Rmageddon Glimpses</h2>
      <img src="/cline.png" alt="Decorative element" className="cline-top-left" />
      <div className="rmag-glimpse-carousel-container">
        <div 
          className="rmag-glimpse-carousel"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`rmag-glimpse-slide ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="slide-content">
                <img src={slide.content} alt={`Slide ${slide.id}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src="/cline.png" alt="Decorative element" className="cline-bottom-right" />
    </div>
  );
};

export default RmagGlimpse;