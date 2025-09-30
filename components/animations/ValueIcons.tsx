import React from 'react'

interface IconProps {
  size?: number
  className?: string
}

// Excellence - Trophy/Award icon
export const ExcellenceIcon: React.FC<IconProps> = ({ size = 100, className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="excellenceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      
      {/* Trophy base */}
      <rect x="35" y="75" width="30" height="8" fill="url(#excellenceGradient)" rx="2" />
      <rect x="40" y="65" width="20" height="10" fill="url(#excellenceGradient)" />
      
      {/* Trophy cup */}
      <path d="M 30 35 L 35 65 L 65 65 L 70 35 Z" fill="url(#excellenceGradient)" opacity="0.9" />
      <ellipse cx="50" cy="35" rx="20" ry="5" fill="url(#excellenceGradient)" />
      
      {/* Handles */}
      <path d="M 30 40 Q 20 45 20 50 Q 20 55 25 55" stroke="url(#excellenceGradient)" strokeWidth="3" fill="none" opacity="0.8" />
      <path d="M 70 40 Q 80 45 80 50 Q 80 55 75 55" stroke="url(#excellenceGradient)" strokeWidth="3" fill="none" opacity="0.8" />
      
      {/* Star on trophy */}
      <path d="M 50 45 L 52 51 L 58 51 L 53 55 L 55 61 L 50 57 L 45 61 L 47 55 L 42 51 L 48 51 Z" fill="#FCD34D">
        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
      </path>
      
      {/* Sparkles */}
      <circle cx="25" cy="30" r="2" fill="#FCD34D">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="75" cy="30" r="2" fill="#FCD34D">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="25" r="2" fill="#FCD34D">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

// Collaboration - Connected people/network icon
export const CollaborationIcon: React.FC<IconProps> = ({ size = 100, className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="collaborationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      
      {/* Connection lines */}
      <line x1="30" y1="35" x2="50" y2="50" stroke="url(#collaborationGradient)" strokeWidth="2" opacity="0.6">
        <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="3s" repeatCount="indefinite" />
      </line>
      <line x1="70" y1="35" x2="50" y2="50" stroke="url(#collaborationGradient)" strokeWidth="2" opacity="0.6">
        <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="3s" begin="0.5s" repeatCount="indefinite" />
      </line>
      <line x1="30" y1="65" x2="50" y2="50" stroke="url(#collaborationGradient)" strokeWidth="2" opacity="0.6">
        <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="3s" begin="1s" repeatCount="indefinite" />
      </line>
      <line x1="70" y1="65" x2="50" y2="50" stroke="url(#collaborationGradient)" strokeWidth="2" opacity="0.6">
        <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="3s" begin="1.5s" repeatCount="indefinite" />
      </line>
      
      {/* People nodes */}
      {/* Center person */}
      <circle cx="50" cy="45" r="6" fill="url(#collaborationGradient)" />
      <circle cx="50" cy="58" r="10" fill="url(#collaborationGradient)" opacity="0.8" />
      
      {/* Top left person */}
      <circle cx="30" cy="30" r="5" fill="url(#collaborationGradient)">
        <animate attributeName="r" values="5;6;5" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="30" cy="40" r="8" fill="url(#collaborationGradient)" opacity="0.8">
        <animate attributeName="r" values="8;9;8" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Top right person */}
      <circle cx="70" cy="30" r="5" fill="url(#collaborationGradient)">
        <animate attributeName="r" values="5;6;5" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="40" r="8" fill="url(#collaborationGradient)" opacity="0.8">
        <animate attributeName="r" values="8;9;8" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      
      {/* Bottom left person */}
      <circle cx="30" cy="60" r="5" fill="url(#collaborationGradient)">
        <animate attributeName="r" values="5;6;5" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="30" cy="70" r="8" fill="url(#collaborationGradient)" opacity="0.8">
        <animate attributeName="r" values="8;9;8" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
      
      {/* Bottom right person */}
      <circle cx="70" cy="60" r="5" fill="url(#collaborationGradient)">
        <animate attributeName="r" values="5;6;5" dur="2s" begin="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="70" r="8" fill="url(#collaborationGradient)" opacity="0.8">
        <animate attributeName="r" values="8;9;8" dur="2s" begin="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

// Integrity - Shield with checkmark icon
export const IntegrityIcon: React.FC<IconProps> = ({ size = 100, className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="integrityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
      
      {/* Shield */}
      <path d="M 50 20 L 75 30 L 75 50 Q 75 70 50 85 Q 25 70 25 50 L 25 30 Z" 
            fill="url(#integrityGradient)" 
            opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" />
      </path>
      
      {/* Shield border */}
      <path d="M 50 20 L 75 30 L 75 50 Q 75 70 50 85 Q 25 70 25 50 L 25 30 Z" 
            fill="none" 
            stroke="url(#integrityGradient)" 
            strokeWidth="2" />
      
      {/* Checkmark */}
      <path d="M 38 50 L 46 60 L 62 40" 
            fill="none" 
            stroke="#FFF" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round">
        <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="2s" repeatCount="indefinite" />
      </path>
      
      {/* Decorative lines */}
      <line x1="50" y1="25" x2="50" y2="35" stroke="#FFF" strokeWidth="2" opacity="0.5">
        <animate attributeName="y2" values="35;40;35" dur="2s" repeatCount="indefinite" />
      </line>
    </svg>
  )
}

// Impact - Target with arrow icon
export const ImpactIcon: React.FC<IconProps> = ({ size = 100, className = '' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="impactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#DC2626" />
        </linearGradient>
      </defs>
      
      {/* Target circles */}
      <circle cx="55" cy="50" r="30" fill="none" stroke="url(#impactGradient)" strokeWidth="2" opacity="0.3">
        <animate attributeName="r" values="30;32;30" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="55" cy="50" r="20" fill="none" stroke="url(#impactGradient)" strokeWidth="2" opacity="0.5">
        <animate attributeName="r" values="20;22;20" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="55" cy="50" r="10" fill="none" stroke="url(#impactGradient)" strokeWidth="2" opacity="0.7">
        <animate attributeName="r" values="10;12;10" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="55" cy="50" r="4" fill="url(#impactGradient)">
        <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Arrow */}
      <g>
        <line x1="20" y1="25" x2="50" y2="45" stroke="url(#impactGradient)" strokeWidth="3" strokeLinecap="round" />
        <polygon points="50,45 48,40 45,42 50,50 58,42 55,40" fill="url(#impactGradient)" />
        
        {/* Arrow feathers */}
        <line x1="20" y1="25" x2="15" y2="20" stroke="url(#impactGradient)" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="25" x2="15" y2="30" stroke="url(#impactGradient)" strokeWidth="2" strokeLinecap="round" />
      </g>
      
      {/* Impact waves */}
      <circle cx="55" cy="50" r="35" fill="none" stroke="url(#impactGradient)" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="5;35" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="55" cy="50" r="35" fill="none" stroke="url(#impactGradient)" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="5;35" dur="2s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}
