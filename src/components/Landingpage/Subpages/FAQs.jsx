import React, { useState, useEffect } from 'react';

const FAQ = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // FAQ data
  const faqItems = [
    { q: "What is IMVI?", a: "IMVI is an AR-powered platform that links physical cards to digital video content" },
    { q: "How do I scan a card?", a: "Simply open the IMVI app, point your phone at the card, and the video plays instantly" },
    { q: "Do I need to pay to use the app?", a: "No, the app is free to use" },
    { q: "Can I update videos?", a: "Yes, you can upload new content to the cards at any time" },
    { q: "Is my data secure?", a: "Yes" }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: isMobile ? '30px' : '20px',
      width: '100%',
      maxWidth: '1114px',
      margin: '0 auto',
      padding: isMobile ? '15px' : '0px',
    }}>
      {/* Left column with title + arrow */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0px',
        width: isMobile ? '100%' : 'auto',
        flexShrink: 0
      }}>
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
          FAQs
        </div>
        
        {/* Arrow icon */}
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

      {/* Right column with FAQ items in two columns */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '15px' : '20px',
        width: isMobile ? '100%' : 'calc(100% - 150px)', // Adjust based on title width
      }}>
        {/* First column with first 3 FAQs */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? '15px' : '20px',
        }}>
          {faqItems.slice(0, 3).map((item, i) => (
            <div key={i} style={{
              padding: isMobile ? '20px 15px' : '30px 20px',
              background: '#000',
              borderBottom: '1px solid #333',
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '12px' : '15px',
            }}>
              <div style={{
                color: '#8A8A8A',
                fontSize: isMobile ? '18px' : '20px',
                fontFamily: 'Geist, sans-serif',
                fontWeight: '400',
                lineHeight: isMobile ? '24px' : '26.40px'
              }}>
                {item.q}
              </div>
              <div style={{
                color: '#FFFFFF',
                fontSize: isMobile ? '18px' : '20px',
                fontFamily: 'Geist, sans-serif',
                fontWeight: '400',
                lineHeight: isMobile ? '24px' : '26.40px'
              }}>
                {item.a}
              </div>
            </div>
          ))}
        </div>

        {/* Second column with last 2 FAQs */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? '15px' : '20px',
        }}>
          {faqItems.slice(3).map((item, i) => (
            <div key={i} style={{
              padding: isMobile ? '20px 15px' : '30px 20px',
              background: '#000',
              borderBottom: '1px solid #333',
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '12px' : '15px',
               // Rounded bottom for last item
            }}>
              <div style={{
                color: '#8A8A8A',
                fontSize: isMobile ? '18px' : '20px',
                fontFamily: 'Geist, sans-serif',
                fontWeight: '400',
                lineHeight: isMobile ? '24px' : '26.40px'
              }}>
                {item.q}
              </div>
              <div style={{
                color: '#FFFFFF',
                fontSize: isMobile ? '18px' : '20px',
                fontFamily: 'Geist, sans-serif',
                fontWeight: '400',
                lineHeight: isMobile ? '24px' : '26.40px'
              }}>
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;