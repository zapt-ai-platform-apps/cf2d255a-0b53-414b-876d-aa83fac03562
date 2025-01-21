import React, { useEffect, useRef } from 'react';

export default function ShooterGame() {
  const canvasRef = useRef(null);

  // Create an array of 100 bots with random positions
  const bots = Array.from({ length: 100 }, () => ({
    x: Math.random() * 800,
    y: Math.random() * 600,
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    const render = () => {
      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw each bot
      bots.forEach(bot => {
        // Simple rendering as a circle
        context.beginPath();
        context.arc(bot.x, bot.y, 5, 0, 2 * Math.PI);
        context.fillStyle = 'red';
        context.fill();
      });

      // Request the next frame
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [bots]);

  return <canvas ref={canvasRef} width={800} height={600} />;
}