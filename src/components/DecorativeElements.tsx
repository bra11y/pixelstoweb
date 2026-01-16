
import React from 'react';

interface BlobProps {
  size?: string;
  position?: string;
  color?: string;
  delay?: string;
}

export const Blob: React.FC<BlobProps> = ({
  size = 'w-64 h-64',
  position = 'top-0 left-0',
  color = 'bg-teal/10',
  delay = 'animation-delay-0'
}) => {
  return (
    <div className={`absolute ${position} ${size} ${color} rounded-full blur-3xl opacity-40 animate-float ${delay} -z-10`}></div>
  );
};

interface WaveProps {
  position?: string;
  color?: string;
  opacity?: string;
}

export const Wave: React.FC<WaveProps> = ({
  position = 'bottom-0',
  color = 'text-white',
  opacity = 'opacity-10'
}) => {
  return (
    <div className={`absolute ${position} left-0 w-full overflow-hidden leading-0 ${opacity}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className={`w-full h-16 ${color}`}>
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>
    </div>
  );
};

interface FloatingShapeProps {
  type?: 'circle' | 'square' | 'triangle';
  size?: string;
  position?: string;
  color?: string;
  rotation?: string;
}

export const FloatingShape: React.FC<FloatingShapeProps> = ({
  type = 'circle',
  size = 'w-12 h-12',
  position = 'top-10 right-10',
  color = 'bg-orange/20',
  rotation = 'rotate-0'
}) => {
  return (
    <div className={`absolute ${position} ${size} ${color} ${rotation} animate-float -z-10`} style={{
      clipPath: type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 
                type === 'square' ? 'none' : 'none',
      borderRadius: type === 'circle' ? '50%' : type === 'square' ? '15%' : '0'
    }}></div>
  );
};

export default { Blob, Wave, FloatingShape };
