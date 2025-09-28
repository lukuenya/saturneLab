import React, { useState, useEffect } from 'react';

interface FloatingElementsProps {
  className?: string;
}

export const FloatingDataElements: React.FC<FloatingElementsProps> = ({ className = "" }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    {/* Floating geometric shapes */}
    <div className="absolute top-20 left-10 w-16 h-16 opacity-10 animate-float">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="40" fill="currentColor" className="text-primary-600">
          {isClient && <animate attributeName="r" values="40;45;40" dur="4s" repeatCount="indefinite" />}
        </circle>
      </svg>
    </div>
    
    <div className="absolute top-32 right-20 w-12 h-12 opacity-10 animate-float-delayed">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="20" y="20" width="60" height="60" fill="currentColor" className="text-secondary-600">
          {isClient && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;360 50 50"
              dur="20s"
              repeatCount="indefinite"
            />
          )}
        </rect>
      </svg>
    </div>
    
    <div className="absolute top-60 left-1/4 w-8 h-8 opacity-15 animate-float-slow">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon points="50,10 90,90 10,90" fill="currentColor" className="text-primary-500">
          {isClient && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;-360 50 50"
              dur="15s"
              repeatCount="indefinite"
            />
          )}
        </polygon>
      </svg>
    </div>
    
    <div className="absolute bottom-32 right-1/3 w-20 h-20 opacity-8 animate-float">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50,10 L90,30 L90,70 L50,90 L10,70 L10,30 Z" fill="currentColor" className="text-secondary-500">
          {isClient && <animate attributeName="opacity" values="0.05;0.15;0.05" dur="6s" repeatCount="indefinite" />}
        </path>
      </svg>
    </div>
    
    {/* Data visualization elements */}
    <div className="absolute top-40 right-10 w-24 h-16 opacity-12 animate-pulse">
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <rect x="10" y="40" width="8" height="20" fill="currentColor" className="text-primary-400">
          {isClient && <animate attributeName="height" values="20;35;20" dur="3s" repeatCount="indefinite" />}
          {isClient && <animate attributeName="y" values="40;25;40" dur="3s" repeatCount="indefinite" />}
        </rect>
        <rect x="25" y="30" width="8" height="30" fill="currentColor" className="text-primary-500">
          {isClient && <animate attributeName="height" values="30;45;30" dur="3.5s" repeatCount="indefinite" />}
          {isClient && <animate attributeName="y" values="30;15;30" dur="3.5s" repeatCount="indefinite" />}
        </rect>
        <rect x="40" y="20" width="8" height="40" fill="currentColor" className="text-primary-600">
          {isClient && <animate attributeName="height" values="40;55;40" dur="4s" repeatCount="indefinite" />}
          {isClient && <animate attributeName="y" values="20;5;20" dur="4s" repeatCount="indefinite" />}
        </rect>
        <rect x="55" y="35" width="8" height="25" fill="currentColor" className="text-primary-500">
          {isClient && <animate attributeName="height" values="25;40;25" dur="3.2s" repeatCount="indefinite" />}
          {isClient && <animate attributeName="y" values="35;20;35" dur="3.2s" repeatCount="indefinite" />}
        </rect>
      </svg>
    </div>
    
    {/* Network nodes */}
    <div className="absolute bottom-20 left-20 w-32 h-32 opacity-10 animate-float-slow">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <g className="text-secondary-400">
          <circle cx="20" cy="20" r="3" fill="currentColor">
            {isClient && <animate attributeName="r" values="3;6;3" dur="4s" repeatCount="indefinite" />}
          </circle>
          <circle cx="80" cy="30" r="3" fill="currentColor">
            {isClient && <animate attributeName="r" values="3;6;3" dur="5s" repeatCount="indefinite" />}
          </circle>
          <circle cx="30" cy="70" r="3" fill="currentColor">
            {isClient && <animate attributeName="r" values="3;6;3" dur="4.5s" repeatCount="indefinite" />}
          </circle>
          <circle cx="70" cy="80" r="3" fill="currentColor">
            {isClient && <animate attributeName="r" values="3;6;3" dur="3.8s" repeatCount="indefinite" />}
          </circle>
          
          <line x1="20" y1="20" x2="80" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.5">
            {isClient && <animate attributeName="stroke-dasharray" values="0,70;70,0" dur="6s" repeatCount="indefinite" />}
          </line>
          <line x1="80" y1="30" x2="70" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.5">
            {isClient && <animate attributeName="stroke-dasharray" values="0,60;60,0" dur="7s" repeatCount="indefinite" />}
          </line>
          <line x1="70" y1="80" x2="30" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.5">
            {isClient && <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="5.5s" repeatCount="indefinite" />}
          </line>
          <line x1="30" y1="70" x2="20" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.5">
            {isClient && <animate attributeName="stroke-dasharray" values="0,60;60,0" dur="6.5s" repeatCount="indefinite" />}
          </line>
        </g>
      </svg>
    </div>
  </div>
  );
};

export const ParticleField: React.FC<FloatingElementsProps> = ({ className = "" }) => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-ping" />
        </div>
      ))}
    </div>
  );
};
