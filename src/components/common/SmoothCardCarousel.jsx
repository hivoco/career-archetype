import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const SmoothCardCarousel = ({scrollDirection="up"}) => {
  const cards = [
    { archtypeSrc: "/images/archtypes/The_Artist_2.png" },
    { archtypeSrc: "/images/archtypes/The_Harmoniser_2.png" },
    { archtypeSrc: "/images/archtypes/The_Sage_2.png" },
    { archtypeSrc: "/images/archtypes/The_Ruler_2.png" },
    { archtypeSrc: "/images/archtypes/The_Protagonist_2.png" },
    { archtypeSrc: "/images/archtypes/The_Visionary_2.png" },
    { archtypeSrc: "/images/archtypes/The_Strategist_2.png" },
    { archtypeSrc: "/images/archtypes/The_Explorer_2.png" },
    { archtypeSrc: "/images/archtypes/The_Indomitable_Spirit_2.png" },
    { archtypeSrc: "/images/archtypes/The_Maverick_2.png" },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let startTime;
    const cardHeight = 188; // Pixels (matching h-64)
    const gap = 16; // Gap between cards in px
    const totalCardHeight = cardHeight * 10 + gap * 10;
    const scrollSpeed = 0.1; // Pixels per millisecond

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const totalScroll = elapsed * scrollSpeed;
      const currentScroll = totalScroll % totalCardHeight;

      if (scrollDirection === "up") {
        container.style.transform = `translateY(-${currentScroll}px)`;
      } else {
        container.style.transform = `translateY(${currentScroll}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center  overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
        <div ref={containerRef} className="absolute w-full">
          {[...cards, ...cards].map((card, index) => (
            <div
              key={index}
              className={`
                absolute w-full
                flex items-center justify-center
              `}
              style={{
                top: `${index * (188 + 16)}px`, // 256px card height + 32px gap
                left: "0",
              }}
            >
              <Image
                priority={true}
                src={card.archtypeSrc}
                width={78}
                height={189}
                alt="Archetype image"
              />
              <h1 className="textbl">{card.id}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmoothCardCarousel;
