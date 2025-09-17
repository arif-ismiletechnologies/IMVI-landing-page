import React, { useEffect, useState } from 'react';

const Information = () => {
  const sentences = [
    "Scan the card.",
    "Watch the moment.",
    "Share the excitement."
  ];

  const [highlightIndex, setHighlightIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cycle through sentences every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex(prev => (prev + 1) % sentences.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const featuresData = [
    {
      title: "Exclusive Design",
      description: "Every card is professionally printed and personalized to match your team's brand",
      icon: "/brush.png"
    },
    {
      title: "Augmented Reality Integration",
      description: "Videos instantly launch when cards are scanned with a phone",
      icon: "/VR.png"
    },
    {
      title: "Shareable Content",
      description: "Content is easily shareable with Fans, Friends and Family",
      icon: "/uploads.png"
    }
  ];

  return (
    <div style={{
      width: isMobile ? '100%' : '1114px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: isMobile ? '40px' : '60px',
      margin: '0 auto',
      padding: isMobile ? '20px' : '0'
    }}>
      
      {/* Header Section */}
      <div style={{
        width: isMobile ? '100%' : '929px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: isMobile ? '40px' : '0'
      }}>
        <div style={{
          width: isMobile ? '100%' : '262px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flexShrink: 0,
          gap: '0px'
        }}>
          <div style={{
            fontFamily: 'Geist, sans-serif',
            fontSize: isMobile ? '32px' : '43px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '120%',
            textAlign: isMobile ? 'left' : 'center',
            background: 'linear-gradient(90deg, #F0E394 0%, #EDE091 15%, #E7D78A 30%, #DBC77D 50%, #CBB16B 65%, #B79554 80%, #9E7338 90%, #94662D 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            alignSelf: 'stretch'
          }}>
            How It Works
          </div>

          {/* Arrow Image */}
          <div style={{ width: isMobile ? '40px' : '52px', height: isMobile ? '40px' : '52px', marginTop: isMobile ? '10px' : '0' }}>
            <img src="/arrow.png" alt="Arrow" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>

        {/* Rotating Sentences */}
        <div style={{
          paddingTop: isMobile ? '0' : '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px'
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'column', 
            gap: isMobile ? '20px' : '4px' 
          }}>
            {sentences.map((text, idx) => (
              <span key={idx} style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: isMobile ? '24px' : '34px',
                fontWeight: '400',
                lineHeight: '120%',
                color: highlightIndex === idx ? '#FFF' : '#545454'
              }}>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Features Cards */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'flex-start',
        gap: isMobile ? '40px' : '107px',
        alignSelf: 'stretch'
      }}>
        {featuresData.map((feature, idx) => (
          <div key={idx} style={{
            width: isMobile ? '100%' : '300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '30px'
          }}>
            {/* Icon */}
            <div style={{ width: isMobile ? '40px' : '52px', height: isMobile ? '40px' : '52px' }}>
              <img src={feature.icon} alt="Icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>

            {/* Title */}
            <div style={{
              color: '#FFFFFF',
              fontFamily: 'Geist, sans-serif',
              fontSize: isMobile ? '18px' : '22px',
              fontWeight: '400',
              lineHeight: '120%',
              alignSelf: 'stretch'
            }}>
              {feature.title}
            </div>

            {/* Description */}
            <div style={{
              color: '#B0B0B0',
              fontFamily: 'Geist, sans-serif',
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '400',
              lineHeight: '120%',
              alignSelf: 'stretch'
            }}>
              {feature.description}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Information;