import React, { useState, useEffect, useRef } from 'react';
import './MemberLove.css';

const MemberLove = () => {
  const [slides, setSlides] = useState([
    { id: 1, content: 'https://picsum.photos/seed/1/400/300' },
    { id: 2, content: 'https://picsum.photos/seed/2/400/300' },
    { id: 3, content: 'https://picsum.photos/seed/3/400/300' },
    { id: 4, content: 'https://picsum.photos/seed/4/400/300' },
    { id: 5, content: 'https://picsum.photos/seed/5/400/300' },
    { id: 6, content: 'https://picsum.photos/seed/6/400/300' },
  ]);
  
  // Track active slide ID
  const [activeId, setActiveId] = useState(slides[1].id);
  const intervalRef = useRef(null);
  
  // Function to rotate the slides array for infinite loop effect
  const rotateSlides = () => {
    setSlides(prevSlides => {
      const newSlides = [...prevSlides];
      // Take the last element and move it to the beginning (right to left animation)
      const lastSlide = newSlides.pop();
      newSlides.unshift(lastSlide);
      
      // Update the active ID to track which slide is active
      setActiveId(newSlides[activeIndex].id);
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
    intervalRef.current = setInterval(() => {
      memoizedRotateSlides();
    }, 1500);
  };
  
  // Memoize the rotateSlides function to prevent infinite re-renders
  const memoizedRotateSlides = React.useCallback(() => {
    setSlides(prevSlides => {
      const newSlides = [...prevSlides];
      const lastSlide = newSlides.pop();
      newSlides.unshift(lastSlide);
      setActiveId(newSlides[1].id);
      return newSlides;
    });
  }, []);

  // Auto-rotate slides every 1.5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      memoizedRotateSlides();
    }, 1500);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [memoizedRotateSlides]);

  // Navigation dots removed as requested

  return (
    <div className="member-love-container">
      <h2 className="member-love-title">Why Our Members Love Us</h2>
      <img src="/cline.png" alt="Decorative element" className="cline-top-right" />
      
      <div className="member-love-carousel-container">
        <div 
          className="member-love-carousel"
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
              className={`member-love-slide ${slide.id === activeId ? 'active' : ''}`}
            >
              <div className="slide-content">
                <img src={slide.content} alt={`Slide ${slide.id}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberLove;