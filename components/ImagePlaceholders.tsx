import React from 'react';

interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  className?: string;
  type?: 'team' | 'office' | 'data-center' | 'meeting' | 'analytics';
  alt?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  width = 400,
  height = 300,
  className = "",
  type = 'team',
  alt = "Placeholder image"
}) => {
  const renderPlaceholder = () => {
    switch (type) {
      case 'team':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
              <linearGradient id="teamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="#F8FAFC" />
            
            {/* Team members silhouettes */}
            <g fill="url(#teamGradient)" opacity="0.8">
              {/* Person 1 */}
              <circle cx="120" cy="120" r="25" />
              <rect x="95" y="145" width="50" height="80" rx="25" />
              
              {/* Person 2 */}
              <circle cx="200" cy="110" r="30" />
              <rect x="170" y="140" width="60" height="90" rx="30" />
              
              {/* Person 3 */}
              <circle cx="280" cy="125" r="25" />
              <rect x="255" y="150" width="50" height="80" rx="25" />
            </g>
            
            {/* Office elements */}
            <rect x="50" y="250" width="300" height="40" fill="#E5E7EB" opacity="0.5" />
            <rect x="320" y="80" width="60" height="100" fill="#D1D5DB" opacity="0.3" />
            
            {/* Decorative elements */}
            <circle cx="350" cy="50" r="15" fill="#F59E0B" opacity="0.6" />
            <rect x="30" y="40" width="20" height="20" fill="#10B981" opacity="0.6" />
            
            <text x="200" y="280" textAnchor="middle" fill="#6B7280" fontSize="16" fontFamily="Inter">
              Équipe Saturne Lab
            </text>
          </svg>
        );
        
      case 'office':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
              <linearGradient id="officeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="#F0F9FF" />
            
            {/* Office furniture */}
            <rect x="50" y="180" width="120" height="80" fill="url(#officeGradient)" opacity="0.7" />
            <rect x="200" y="160" width="150" height="100" fill="url(#officeGradient)" opacity="0.5" />
            
            {/* Monitors/screens */}
            <rect x="70" y="140" width="80" height="50" fill="#1F2937" />
            <rect x="220" y="120" width="110" height="70" fill="#1F2937" />
            
            {/* Charts on screens */}
            <g stroke="#3B82F6" strokeWidth="2" fill="none">
              <polyline points="80,160 100,150 120,140 140,145" />
              <polyline points="230,150 250,140 270,135 290,130 310,125" />
            </g>
            
            {/* Office plants */}
            <ellipse cx="30" cy="200" rx="15" ry="30" fill="#10B981" />
            <ellipse cx="370" cy="180" rx="12" ry="25" fill="#10B981" />
            
            <text x="200" y="280" textAnchor="middle" fill="#6B7280" fontSize="16" fontFamily="Inter">
              Bureau Saturne Lab
            </text>
          </svg>
        );
        
      case 'analytics':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
              <linearGradient id="analyticsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#5B21B6" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="#FAFAFA" />
            
            {/* Dashboard screen */}
            <rect x="50" y="50" width="300" height="180" fill="#1F2937" rx="10" />
            
            {/* Charts and graphs */}
            <g>
              {/* Bar chart */}
              <rect x="70" y="180" width="15" height="30" fill="#3B82F6" />
              <rect x="90" y="160" width="15" height="50" fill="#10B981" />
              <rect x="110" y="140" width="15" height="70" fill="#F59E0B" />
              <rect x="130" y="170" width="15" height="40" fill="#EF4444" />
              
              {/* Pie chart */}
              <circle cx="250" cy="140" r="40" fill="none" stroke="#3B82F6" strokeWidth="20" 
                      strokeDasharray="75 251" transform="rotate(-90 250 140)" />
              <circle cx="250" cy="140" r="40" fill="none" stroke="#10B981" strokeWidth="20" 
                      strokeDasharray="50 251" strokeDashoffset="-75" transform="rotate(-90 250 140)" />
              
              {/* Line graph */}
              <polyline points="70,100 100,90 130,85 160,80 190,75" 
                       stroke="#F59E0B" strokeWidth="3" fill="none" />
            </g>
            
            {/* Data points */}
            <g fill="#FFFFFF">
              <circle cx="100" cy="90" r="3" />
              <circle cx="130" cy="85" r="3" />
              <circle cx="160" cy="80" r="3" />
            </g>
            
            <text x="200" y="280" textAnchor="middle" fill="#6B7280" fontSize="16" fontFamily="Inter">
              Analyse de Données
            </text>
          </svg>
        );
        
      case 'data-center':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
              <linearGradient id="datacenterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#B91C1C" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="#F1F5F9" />
            
            {/* Server racks */}
            <g fill="url(#datacenterGradient)" opacity="0.8">
              <rect x="80" y="80" width="60" height="140" rx="5" />
              <rect x="160" y="70" width="60" height="150" rx="5" />
              <rect x="240" y="85" width="60" height="135" rx="5" />
            </g>
            
            {/* Server details */}
            <g fill="#1F2937">
              {[...Array(6)].map((_, i) => (
                <rect key={i} x="85" y={90 + i * 20} width="50" height="8" />
              ))}
              {[...Array(7)].map((_, i) => (
                <rect key={i} x="165" y={80 + i * 20} width="50" height="8" />
              ))}
              {[...Array(6)].map((_, i) => (
                <rect key={i} x="245" y={95 + i * 20} width="50" height="8" />
              ))}
            </g>
            
            {/* Status lights */}
            <g>
              <circle cx="125" cy="95" r="3" fill="#10B981" />
              <circle cx="125" cy="115" r="3" fill="#F59E0B" />
              <circle cx="205" cy="85" r="3" fill="#10B981" />
              <circle cx="205" cy="105" r="3" fill="#10B981" />
              <circle cx="285" cy="100" r="3" fill="#EF4444" />
            </g>
            
            <text x="200" y="280" textAnchor="middle" fill="#6B7280" fontSize="16" fontFamily="Inter">
              Centre de Données
            </text>
          </svg>
        );
        
      default:
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <rect width="400" height="300" fill="#F3F4F6" />
            <rect x="150" y="100" width="100" height="100" fill="#E5E7EB" />
            <text x="200" y="280" textAnchor="middle" fill="#9CA3AF" fontSize="16">
              Image
            </text>
          </svg>
        );
    }
  };

  return (
    <div 
      className={`bg-gray-100 rounded-lg overflow-hidden shadow-sm ${className}`}
      style={{ width, height }}
      aria-label={alt}
    >
      {renderPlaceholder()}
    </div>
  );
};

export default ImagePlaceholder;
