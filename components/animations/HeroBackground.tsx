import React, { useState, useEffect } from 'react';

interface HeroBackgroundProps {
  className?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ className = "" }) => {
  const [isClient, setIsClient] = useState(false);
  const uniqueGridId = "hero-grid-pattern";

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
  <div className={`absolute inset-0 overflow-hidden ${className}`}>
    {/* Main gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
    
    {/* Animated grid pattern */}
    <div className="absolute inset-0 opacity-30">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id={uniqueGridId} width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-200">
              {isClient && <animate attributeName="stroke-opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />}
            </path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${uniqueGridId})`} />
      </svg>
    </div>
    
    {/* Animated data visualization background */}
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
      <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
        {/* Animated chart bars */}
        <g className="text-primary-600">
          {[100, 120, 80, 140, 90, 160, 110, 130].map((height, i) => (
            <rect
              key={`bar-${i}`}
              x={50 + i * 40}
              y={400 - height}
              width="25"
              height={height}
              fill="currentColor"
              opacity="0.6"
            >
              {isClient && (
                <>
                  <animate
                    attributeName="height"
                    values={`${height};${height + 50};${height}`}
                    dur={`${3 + i * 0.2}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    values={`${400 - height};${400 - height - 50};${400 - height}`}
                    dur={`${3 + i * 0.2}s`}
                    repeatCount="indefinite"
                  />
                </>
              )}
            </rect>
          ))}
        </g>
        
        {/* Animated trend line */}
        <polyline
          points="50,450 90,400 130,350 170,320 210,280 250,260 290,240 330,200"
          stroke="currentColor"
          className="text-secondary-500"
          strokeWidth="3"
          fill="none"
          opacity="0.7"
        >
          {isClient && (
            <animate
              attributeName="stroke-dasharray"
              values="0,300;300,0;0,300"
              dur="6s"
              repeatCount="indefinite"
            />
          )}
        </polyline>
        
        {/* Network nodes */}
        <g className="text-primary-400" opacity="0.4">
          {[
            { cx: 100, cy: 150 },
            { cx: 200, cy: 100 },
            { cx: 300, cy: 180 },
            { cx: 150, cy: 250 },
            { cx: 250, cy: 220 },
          ].map((node, i) => (
            <g key={`node-${i}`}>
              <circle
                cx={node.cx}
                cy={node.cy}
                r="6"
                fill="currentColor"
              >
                {isClient && (
                  <animate
                    attributeName="r"
                    values="6;10;6"
                    dur={`${2 + i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                )}
              </circle>
              {i < 4 && (
                <line
                  x1={node.cx}
                  y1={node.cy}
                  x2={[200, 300, 150, 250][i]}
                  y2={[100, 180, 250, 220][i]}
                  stroke="currentColor"
                  strokeWidth="2"
                  opacity="0.3"
                >
                  {isClient && (
                    <animate
                      attributeName="stroke-dasharray"
                      values="0,100;100,0"
                      dur={`${4 + i}s`}
                      repeatCount="indefinite"
                    />
                  )}
                </line>
              )}
            </g>
          ))}
        </g>
      </svg>
    </div>
    
    {/* Floating geometric shapes */}
    <div className="absolute inset-0">
      {/* Large circle */}
      <div className="absolute top-20 right-32 w-32 h-32 opacity-5">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 animate-pulse-glow" />
      </div>
      
      {/* Medium hexagon */}
      <div className="absolute bottom-32 left-20 w-20 h-20 opacity-8 animate-float-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 85,25 85,75 50,95 15,75 15,25"
            fill="currentColor"
            className="text-secondary-300"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;360 50 50"
              dur="20s"
              repeatCount="indefinite"
            />
          </polygon>
        </svg>
      </div>
      
      {/* Small triangles */}
      <div className="absolute top-1/3 left-10 w-12 h-12 opacity-10 animate-float">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="currentColor"
            className="text-primary-400"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-1/4 right-16 w-8 h-8 opacity-12 animate-float-delayed">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="currentColor"
            className="text-accent-400"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;-360 50 50"
              dur="15s"
              repeatCount="indefinite"
            />
          </polygon>
        </svg>
      </div>
    </div>
    
    {/* Particle system */}
    <div className="absolute inset-0">
      {[
        { left: 10, top: 20, delay: 0, duration: 3 },
        { left: 30, top: 60, delay: 1, duration: 4 },
        { left: 70, top: 15, delay: 2, duration: 5 },
        { left: 85, top: 45, delay: 0.5, duration: 3.5 },
        { left: 50, top: 80, delay: 1.5, duration: 4.5 },
        { left: 20, top: 90, delay: 2.5, duration: 3 },
        { left: 90, top: 75, delay: 0.2, duration: 6 },
        { left: 40, top: 35, delay: 1.8, duration: 4 },
        { left: 65, top: 10, delay: 3, duration: 5 },
        { left: 15, top: 55, delay: 0.8, duration: 3.8 },
        { left: 80, top: 30, delay: 2.2, duration: 4.2 },
        { left: 25, top: 70, delay: 1.2, duration: 5.5 },
        { left: 95, top: 85, delay: 0.3, duration: 3.2 },
        { left: 55, top: 25, delay: 2.8, duration: 4.8 },
        { left: 35, top: 95, delay: 1.6, duration: 3.6 }
      ].map((particle, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20 animate-ping"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  </div>
  );
};

export default HeroBackground;
