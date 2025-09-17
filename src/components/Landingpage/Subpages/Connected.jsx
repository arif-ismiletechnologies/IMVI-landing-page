import React, { useState, useEffect } from 'react';

const Connected = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      width: isMobile ? '100%' : '1152px', // Full width on mobile
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: isMobile ? '15px' : '20px',
      margin: '0 auto' // keeps it centered on the page
    }}>

      {/* Header section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0px',
        width: isMobile ? '100%' : '498px'
      }}>
        {/* Gradient Title */}
        <div style={{
          fontFamily: 'Geist, sans-serif',
          fontSize: isMobile ? '32px' : '43px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '120%',
          background: 'linear-gradient(90deg, #F0E394 0%, #EDE091 15%, #E7D78A 30%, #DBC77D 50%, #CBB16B 65%, #B79554 80%, #9E7338 90%, #94662D 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: isMobile ? 'left' : 'inherit'
        }}>
          Always Connected
        </div>

        {/* Arrow image (same as FAQ) */}
        <div style={{ 
          width: isMobile ? '40px' : '52px', 
          height: isMobile ? '40px' : '52px',
          marginTop: isMobile ? '10px' : '0'
        }}>
          <img
            src="/arrow.png"
            alt="Arrow"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Content Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: isMobile ? '15px' : '20px',
        alignSelf: 'stretch',
        marginTop: isMobile ? '30px' : "60px",
      }}>

        {/* Image Container */}
        <div style={{
          alignSelf: 'stretch',
          height: isMobile ? '250px' : '580px',
          borderRadius: '20px',
          borderLeft: '1px solid #EDE091', // gold accent on left
          background: `
            linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.05) 0%,   /* much lighter overlay */
              rgba(0, 0, 0, 0.05) 100%
            ),
            url(/cardstandbase2.png) center/cover no-repeat
          `,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        }} />

        {/* Cards Section */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'flex-start',
          gap: isMobile ? '15px' : '17px',
          alignSelf: 'stretch',
          flexWrap: 'wrap'
        }}>
          {[
            {
              title: "Getting Noticed",
              desc: "A new and compelling way to get your highlights and stats to college coaches and recruiters"
            },
            {
              title: "Scan and Relive Moments Anytime",
              desc: "Parents and relatives can scan cards and watch moments in real time"
            },
            {
              title: "Cards Become Digital Keepsakes",
              desc: "Cards become digital keepsakes for families to revisit anytime"
            }
          ].map((item, i) => (
            <div key={i} style={{
              flex: isMobile ? '1 0 100%' : '1 0 0',
              minWidth: isMobile ? '100%' : '280px',
              borderRadius: '10px',
              background: '#000',
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? '15px' : '20px',
              padding: isMobile ? '15px' : '20px'
            }}>
              <div style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: isMobile ? '15px' : '20px'
              }}>
                {/* Title */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: isMobile ? '20px' : '30px',
                  alignSelf: 'stretch'
                }}>
                  <div style={{
                    color: '#8A8A8A',
                    fontFamily: 'Geist, sans-serif',
                    fontSize: isMobile ? '16px' : '18px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '120%'
                  }}>
                    {item.title}
                  </div>
                </div>

                {/* Description */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: isMobile ? '20px' : '30px',
                  alignSelf: 'stretch'
                }}>
                  <div style={{
                    color: '#FFFFFF',
                    fontFamily: 'Geist, sans-serif',
                    fontSize: isMobile ? '18px' : '22px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '120%'
                  }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connected;