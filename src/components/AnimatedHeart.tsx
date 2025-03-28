import React from 'react';

const AnimatedHeart: React.FC = () => {
  return (
    <div className="animated-logo-container">
      <div className="animated-logo">DP</div>
      <style jsx>{`
        .animated-logo-container {
          position: relative;
          width: 64px;
          height: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 16px;
        }
        
        .animated-logo {
          background-color: #E53935;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 50px;
          width: 50px;
          position: relative;
          border-radius: 50%;
          color: white;
          font-weight: bold;
          font-size: 24px;
          animation: pulse 1.5s ease infinite;
          box-shadow: 0 8px 15px rgba(229, 57, 53, 0.3);
          font-family: 'Courier New', monospace;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedHeart;
