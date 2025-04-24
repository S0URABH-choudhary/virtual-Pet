import React, { useEffect, useRef, useState } from 'react';

const spriteWidth = 350; // adjust to your sprite frame width
const spriteHeight = 370;
const totalFrames = 3; // total frames in your sprite

const Pet = (props) => {
  const { petState, setPetState } = props;
  const canvasRef = useRef(null);

  const [frame, setFrame] = useState(0);

  const idleImg = new Image();
  const playImg = new Image();
  const sleepSprite = new Image();

  idleImg.src = './assets/ideal.png';
  playImg.src = './assets/play.png';
  sleepSprite.src = './assets/sleepingAnimation.png';

  useEffect(() => {
    let animationId;
    let lastFrameTime = 0;
    const frameInterval = 200; // 200ms per frame = 5 FPS
  
    if (props.petState === 'sleeping') {
      const ctx = canvasRef.current.getContext('2d');
  
      const animate = (timestamp) => {
        if (!lastFrameTime) lastFrameTime = timestamp;
        const elapsed = timestamp - lastFrameTime;
  
        if (elapsed > frameInterval) {
          setFrame((prev) => (prev + 1) % totalFrames);
          lastFrameTime = timestamp;
        }
  
        ctx.clearRect(0, 0, spriteWidth, spriteHeight);
        const sx = frame * 337;
        ctx.drawImage(sleepSprite, sx, 0, spriteWidth+30, spriteHeight, 20, 20, spriteWidth+20, spriteHeight+20);
  
        animationId = requestAnimationFrame(animate);
      };
  
      animationId = requestAnimationFrame(animate);
    }
  
    return () => cancelAnimationFrame(animationId);
  }, [petState, frame]);

  return (
    <div className="flex flex-col items-center space-y-4">
      {petState === 'sleeping' ? (
        <canvas ref={canvasRef} width={spriteWidth} height={spriteHeight} />
      ) : (
        <img
          src={petState === 'idle' ? idleImg.src : playImg.src}
          alt={petState}
          width={spriteWidth}
          height={spriteHeight}
        />
      )}
    </div>
  );
};

export default Pet;
