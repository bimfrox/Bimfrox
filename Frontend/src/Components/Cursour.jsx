import React, { useEffect, useState } from "react";

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseenter", mouseEnter);
    document.addEventListener("mouseleave", mouseLeave);

    return () => {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseenter", mouseEnter);
      document.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: 20,
        height: 20,
        border: "2px solid #00c853", // green border
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "transform 0.1s ease-out",
        background: "rgba(0, 200, 83, 0.1)", // light green background
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
}
