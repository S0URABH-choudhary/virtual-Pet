import React, { useEffect, useRef, useState } from 'react';
import idleImg from '../src/assets/ideal.png';
import playImg from '../src/assets/play.png';
import sleepSprite from '../src/assets/sleepingAnimation.png';


const spriteWidth = 350; // adjust to your sprite frame width
const spriteHeight = 370;
const totalFrames = 3; // total frames in your sprite

const Pet = (props) => {
  const { petState, setPetState } = props;
  const canvasRef = useRef(null);

  const [frame, setFrame] = useState(0);


  const sleesprite = new Image();
  sleesprite.src = sleepSprite;
 

 

  


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
        ctx.drawImage(sleesprite, sx, 0, spriteWidth+30, spriteHeight, 20, 20, spriteWidth+20, spriteHeight+20);
  
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
          src={petState === 'idle' ? idleImg : playImg}
          alt={petState}
          width={spriteWidth}
          height={spriteHeight}
        />
      )}
    </div>
  );
};

export default Pet;
