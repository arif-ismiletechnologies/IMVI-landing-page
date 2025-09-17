import React, { useState, useEffect } from 'react';

const TestApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to handle download based on device
  const handleDownload = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Check if iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.open('https://apps.apple.com/us/app/imvi-me/id6720725287?l', '_blank');
      return;
    }
    
    // Check if Android
    if (/android/i.test(userAgent)) {
      window.open('https://play.google.com/store/apps/details?id=com.app.imvi', '_blank');
      return;
    }
    
    // Check if Mac
    if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(navigator.platform)) {
      window.open('https://apps.apple.com/us/app/imvi-me/id6720725287?l', '_blank');
      return;
    }
    
    // Default for other devices (Windows, Linux, etc.)
    window.open('https://play.google.com/store/apps/details?id=com.app.imvi', '_blank');
  };

  return (
    <div style={{
      display: 'flex',
      width: isMobile ? '100%' : '100%', // Changed to full width
      maxWidth: '1200px', // Added max width for larger screens
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0px',
      padding: isMobile ? '0' : '20px',
      margin: '0 auto',
      backgroundColor: 'transparent'
    }}>
      
      {/* Title section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0px',
        width: isMobile ? '100%' : 'auto',
        marginBottom: '10px'
      }}>
        {/* Test the app yourself! text with gradient */}
        <div style={{
          textAlign: 'center',
          fontFamily: 'Geist, sans-serif',
          fontSize: isMobile ? '32px' : '43px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '120%',
          background: 'linear-gradient(90deg, #F0E394 0%, #EDE091 15%, #E7D78A 30%, #DBC77D 50%, #CBB16B 65%, #B79554 80%, #9E7338 90%, #94662D 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          width: '100%'
        }}>
          {isMobile ? (
            <>
              <div>Test the</div>
              <div>app yourself!</div>
            </>
          ) : (
            'Test the app yourself!'
          )}
        </div>

        {/* Description text - right below the title with no gap */}
        <div style={{
          width: isMobile ? '100%' : '700px',
          color: '#FFF',
          textAlign: 'center',
          fontFamily: 'Geist, sans-serif',
          fontSize: isMobile ? '18px' : '22px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '120%',
          marginTop: '5px' // Minimal margin to ensure no gap but proper spacing
        }}>
          Download and scan a card on this website
        </div>
      </div>

      {/* Button with hover - original size */}
      <div 
        style={{
          display: 'flex',
          padding: '6px 10px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          background: isHovered ? '#FFFFFF' : '#E6E6E6',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          margin: '20px 0 60px' // 60px bottom margin as requested
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleDownload}
      >
        <div style={{
          color: '#000',
          fontFamily: 'Geist, sans-serif',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '120%'
        }}>
          Download the App
        </div>
      </div>

      {/* Three images section with increased width */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isMobile ? '20px' : '17px',
        width:  isMobile ? '235px': '100%'  ,
        padding: isMobile ? '0 10px' : '0'
      }}>
        {['/card1.png', '/card2.png', '/card3.png'].map((imagePath, index) => (
          <div key={index} style={{
            display: 'flex',
            height: isMobile ? '300px' : '495px',
            width: isMobile ? '100%' : '350px', // Increased width for desktop
            padding: '20px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '10px',
            borderRadius: '10px',
            background: `url(${imagePath}) center/contain no-repeat`, // Changed to contain to show full image
            backgroundColor: 'lightgray', // Added background color
            minWidth: isMobile ? '100%' : '350px' // Increased min width
          }} />
        ))}
      </div>
    </div>
  );
};

export default TestApp;