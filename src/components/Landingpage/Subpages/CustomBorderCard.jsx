import React, { useState, useEffect } from 'react';

const CustomBorderCard = () => {
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

  // Function to handle button click
  const handleRequestInfo = () => {
    // Replace with your actual URL
    window.open('https://imvi.me/pages/contact', '_blank');
  };

  // Component for gradient text with spaced letters
  const GradientText = ({ text, fontSize }) => (
    <span style={{
      display: 'inline-flex',
      fontFamily: 'Geist, sans-serif',
      fontSize: fontSize,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '120%',
    }}>
      {text.split('').map((letter, index) => (
        <span key={index} style={{
          background: 'linear-gradient(90deg, #EBDD8F 0%, #A98144 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginRight: index === 0 ? '1px' : '0', // Add small space only between the letters
        }}>
          {letter}
        </span>
      ))}
    </span>
  );

  return (
    <div style={{
      display: 'flex',
      width: isMobile ? '400px' : '720px',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '40px',
      padding: isMobile ? '0' : '20px',
      margin: '0 auto',
      backgroundColor: 'transparent'
    }}>
      {/* AR-Powered Sports Cards section with custom gradient border */}
      <div style={{
        display: 'flex',
        padding: '6px 12px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '16px',
        background: '#333',
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(2px)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Gradient border effect (only left + half bottom) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '16px',
          padding: '1.5px',
          pointerEvents: 'none',
          background: `
            /* Left side */
            linear-gradient(to right, #EDE091 0%, rgba(237,224,145,0.6) 60%, transparent 110%) left center / 10px 120% no-repeat,
            
            /* Bottom side */
            linear-gradient(to right, #EDE091 0%, rgba(237,224,145,0.6) 60%, transparent 100%) left bottom / 50% 3px no-repeat
          `,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }} />

        <div style={{
          color: '#FFF',
          textAlign: 'center',
          fontFamily: 'Geist, sans-serif',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '120%',
          position: 'relative',
          zIndex: 1
        }}>
          AR-Powered Sports Cards
        </div>
      </div>

      {/* Transforming Images section - Mobile specific layout */}
      {/* Transforming Images section */}
      <div style={{
        color: '#FFF',
        textAlign: 'center',
        textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
        fontFamily: 'Geist, sans-serif',
        fontSize: isMobile ? '28px' : '53px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '120%',
        width: isMobile ? '100%' : 'auto'
      }}>
        {isMobile ? (
          <>
            <div>
              Transforming{' '}
              <span style={{ display: 'inline-block' }}>
                <GradientText text="IM" fontSize="28px" />
              </span>
              ages into
            </div>
            <div style={{ marginLeft: '65px' }}>
              stimulating{' '}
              <span style={{ display: 'inline-block' }}>
                <GradientText text="VI" fontSize="28px" />
              </span>
              deo content
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                textAlign: 'center',
                whiteSpace: 'nowrap', // prevent wrapping
              }}
            >
              Transforming{' '}
              <span style={{ display: 'inline-block' }}>
                <GradientText text="IM" fontSize={isMobile ? "28px" : "53px"} />
              </span>
              ages into
              <br />
              <span
                style={{
                  display: 'inline-block',
                  paddingLeft: isMobile ? '90px' : '120px', // fixed offset
                  whiteSpace: 'nowrap', // ensure it stays on one line
                }}
              >
                stimulating{' '}
                <GradientText text="VI" fontSize={isMobile ? "28px" : "53px"} />
                deo content
              </span>
            </div>
          </>
        )}
      </div>


      {/* Description */}
      <div style={{
        width: isMobile ? '100%' : '700px',
        color: '#B0B0B0',
        textAlign: 'center',
        fontFamily: 'Geist, sans-serif',
        fontSize: isMobile ? '16px' : '18px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '120%',
        margin: '0 auto'
      }}>
        {isMobile ? (
          "Focusing on youth sports, IMVI takes high-quality laminates and integrates augmented reality (AR) to unlock compelling content"
        ) : (
          <>
            Focusing on youth sports, IMVI takes high-quality laminates and integrates <br /> augmented reality (AR) to unlock compelling content
          </>
        )}
      </div>

      {/* Button with hover */}
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
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleRequestInfo}
      >
        <div style={{
          color: '#000',
          fontFamily: 'Geist, sans-serif',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '120%'
        }}>
          Request More Info
        </div>
      </div>
    </div>
  );
}; 

export default CustomBorderCard;