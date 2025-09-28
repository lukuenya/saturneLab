import React, { useState, useEffect } from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const DataAnalyticsIcon: React.FC<IconProps> = ({ className = "", size = 60 }) => {
  const [isClient, setIsClient] = useState(false);
  const uniqueId = "dataAnalyticsGradient";

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
    >
      <defs>
        <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
      </defs>
      
      {/* Static bars with CSS animation */}
      <rect x="15" y="60" width="12" height="25" fill={`url(#${uniqueId})`} opacity="0.8" className={isClient ? 'animate-pulse' : ''}>
        {isClient && <animate attributeName="height" values="25;40;25" dur="2s" repeatCount="indefinite" />}
        {isClient && <animate attributeName="y" values="60;45;60" dur="2s" repeatCount="indefinite" />}
      </rect>
      <rect x="35" y="45" width="12" height="40" fill={`url(#${uniqueId})`} opacity="0.9" className={isClient ? 'animate-pulse' : ''}>
        {isClient && <animate attributeName="height" values="40;55;40" dur="2.5s" repeatCount="indefinite" />}
        {isClient && <animate attributeName="y" values="45;30;45" dur="2.5s" repeatCount="indefinite" />}
      </rect>
      <rect x="55" y="35" width="12" height="50" fill={`url(#${uniqueId})`} className={isClient ? 'animate-pulse' : ''}>
        {isClient && <animate attributeName="height" values="50;65;50" dur="2.2s" repeatCount="indefinite" />}
        {isClient && <animate attributeName="y" values="35;20;35" dur="2.2s" repeatCount="indefinite" />}
      </rect>
      <rect x="75" y="50" width="12" height="35" fill={`url(#${uniqueId})`} opacity="0.9" className={isClient ? 'animate-pulse' : ''}>
        {isClient && <animate attributeName="height" values="35;50;35" dur="2.8s" repeatCount="indefinite" />}
        {isClient && <animate attributeName="y" values="50;35;50" dur="2.8s" repeatCount="indefinite" />}
      </rect>
      
      {/* Trend line */}
      <polyline
        points="21,65 41,52 61,42 81,55"
        stroke="#F59E0B"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      >
        {isClient && <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="3s" repeatCount="indefinite" />}
      </polyline>
      
      {/* Data points */}
      <circle cx="21" cy="65" r="3" fill="#F59E0B">
        {isClient && <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />}
      </circle>
      <circle cx="41" cy="52" r="3" fill="#F59E0B">
        {isClient && <animate attributeName="r" values="3;5;3" dur="2.2s" repeatCount="indefinite" />}
      </circle>
      <circle cx="61" cy="42" r="3" fill="#F59E0B">
        {isClient && <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite" />}
      </circle>
      <circle cx="81" cy="55" r="3" fill="#F59E0B">
        {isClient && <animate attributeName="r" values="3;5;3" dur="2.8s" repeatCount="indefinite" />}
      </circle>
    </svg>
  );
};

export const NetworkIcon: React.FC<IconProps> = ({ className = "", size = 60 }) => {
  const [isClient, setIsClient] = useState(false);
  const uniqueId = "networkGradient";

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
    >
      <defs>
        <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      
      {/* Nodes */}
      <circle cx="50" cy="20" r="8" fill={`url(#${uniqueId})`}>
        {isClient && <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />}
      </circle>
      <circle cx="20" cy="50" r="6" fill={`url(#${uniqueId})`}>
        {isClient && <animate attributeName="r" values="6;10;6" dur="2.5s" repeatCount="indefinite" />}
      </circle>
      <circle cx="80" cy="50" r="6" fill={`url(#${uniqueId})`}>
        {isClient && <animate attributeName="r" values="6;10;6" dur="2.8s" repeatCount="indefinite" />}
      </circle>
      <circle cx="35" cy="80" r="5" fill={`url(#${uniqueId})`}>
        {isClient && <animate attributeName="r" values="5;9;5" dur="2.2s" repeatCount="indefinite" />}
      </circle>
      <circle cx="65" cy="80" r="5" fill={`url(#${uniqueId})`}>
        {isClient && <animate attributeName="r" values="5;9;5" dur="2.7s" repeatCount="indefinite" />}
      </circle>
      
      {/* Connections */}
      <line x1="50" y1="20" x2="20" y2="50" stroke={`url(#${uniqueId})`} strokeWidth="2" opacity="0.6">
        {isClient && <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="2s" repeatCount="indefinite" />}
      </line>
      <line x1="50" y1="20" x2="80" y2="50" stroke={`url(#${uniqueId})`} strokeWidth="2" opacity="0.6">
        {isClient && <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="2.2s" repeatCount="indefinite" />}
      </line>
      <line x1="20" y1="50" x2="35" y2="80" stroke={`url(#${uniqueId})`} strokeWidth="2" opacity="0.6">
        {isClient && <animate attributeName="stroke-dasharray" values="0,40;40,0" dur="2.5s" repeatCount="indefinite" />}
      </line>
      <line x1="80" y1="50" x2="65" y2="80" stroke={`url(#${uniqueId})`} strokeWidth="2" opacity="0.6">
        {isClient && <animate attributeName="stroke-dasharray" values="0,40;40,0" dur="2.8s" repeatCount="indefinite" />}
      </line>
      <line x1="35" y1="80" x2="65" y2="80" stroke={`url(#${uniqueId})`} strokeWidth="2" opacity="0.6">
        {isClient && <animate attributeName="stroke-dasharray" values="0,30;30,0" dur="3s" repeatCount="indefinite" />}
      </line>
    </svg>
  );
};

export const AIIcon: React.FC<IconProps> = ({ className = "", size = 60 }) => {
  const [isClient, setIsClient] = useState(false);
  const uniqueId = "aiGradient";

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
    >
      <defs>
        <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#5B21B6" />
        </linearGradient>
      </defs>
      
      {/* Brain shape */}
      <path
        d="M30,25 Q50,15 70,25 Q85,35 80,50 Q85,65 70,75 Q50,85 30,75 Q15,65 20,50 Q15,35 30,25"
        fill={`url(#${uniqueId})`}
        opacity="0.8"
      >
        {isClient && (
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.05;1"
            dur="3s"
            repeatCount="indefinite"
          />
        )}
      </path>
      
      {/* Neural network lines */}
      <g opacity="0.7">
        <line x1="35" y1="35" x2="65" y2="35" stroke="#FFFFFF" strokeWidth="2">
          {isClient && <animate attributeName="stroke-dasharray" values="0,30;30,0" dur="2s" repeatCount="indefinite" />}
        </line>
        <line x1="30" y1="50" x2="70" y2="50" stroke="#FFFFFF" strokeWidth="2">
          {isClient && <animate attributeName="stroke-dasharray" values="0,40;40,0" dur="2.5s" repeatCount="indefinite" />}
        </line>
        <line x1="35" y1="65" x2="65" y2="65" stroke="#FFFFFF" strokeWidth="2">
          {isClient && <animate attributeName="stroke-dasharray" values="0,30;30,0" dur="2.2s" repeatCount="indefinite" />}
        </line>
      </g>
      
      {/* Floating particles */}
      <circle cx="25" cy="40" r="2" fill="#FBBF24">
        {isClient && <animate attributeName="cy" values="40;30;40" dur="2s" repeatCount="indefinite" />}
        {isClient && <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />}
      </circle>
      <circle cx="75" cy="60" r="2" fill="#FBBF24">
        {isClient && <animate attributeName="cy" values="60;50;60" dur="2.5s" repeatCount="indefinite" />}
        {isClient && <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />}
      </circle>
    </svg>
  );
};

export const DatabaseIcon: React.FC<IconProps> = ({ className = "", size = 60 }) => {
  const [isClient, setIsClient] = useState(false);
  const uniqueId = "dbGradient";

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
    >
      <defs>
        <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#B91C1C" />
        </linearGradient>
      </defs>
      
      {/* Database cylinders */}
      <ellipse cx="50" cy="25" rx="25" ry="8" fill={`url(#${uniqueId})`} />
      <rect x="25" y="25" width="50" height="15" fill={`url(#${uniqueId})`} />
      <ellipse cx="50" cy="40" rx="25" ry="8" fill={`url(#${uniqueId})`} />
      
      <ellipse cx="50" cy="50" rx="25" ry="8" fill={`url(#${uniqueId})`} />
      <rect x="25" y="50" width="50" height="15" fill={`url(#${uniqueId})`} />
      <ellipse cx="50" cy="65" rx="25" ry="8" fill={`url(#${uniqueId})`} />
      
      <ellipse cx="50" cy="75" rx="25" ry="8" fill={`url(#${uniqueId})`} />
      <rect x="25" y="75" width="50" height="10" fill={`url(#${uniqueId})`} />
      <ellipse cx="50" cy="85" rx="25" ry="8" fill={`url(#${uniqueId})`} />
      
      {/* Data flow animation */}
      <g opacity="0.8">
        <circle cx="30" cy="30" r="2" fill="#FBBF24">
          {isClient && <animate attributeName="cx" values="30;70;30" dur="3s" repeatCount="indefinite" />}
        </circle>
        <circle cx="70" cy="55" r="2" fill="#FBBF24">
          {isClient && <animate attributeName="cx" values="70;30;70" dur="2.5s" repeatCount="indefinite" />}
        </circle>
        <circle cx="40" cy="80" r="2" fill="#FBBF24">
          {isClient && <animate attributeName="cx" values="40;60;40" dur="2s" repeatCount="indefinite" />}
        </circle>
      </g>
    </svg>
  );
};
