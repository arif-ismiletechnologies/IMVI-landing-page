import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import CustomBorderCard from './Subpages/CustomBorderCard';
import Information from './Subpages/Information';
import Features from './Subpages/Features';
import RevenueSharing from './Subpages/RevenueSharing';
import Connected from './Subpages/Connected';
import FAQs from './Subpages/FAQs';
import TestApp from './Subpages/TestApp';

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [revenueSharingPosition, setRevenueSharingPosition] = useState(0);
  const revenueSharingRef = useRef(null);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Update position on resize
      if (revenueSharingRef.current) {
        const rect = revenueSharingRef.current.getBoundingClientRect();
        setRevenueSharingPosition(rect.top + window.scrollY);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Get initial position of RevenueSharing component
    if (revenueSharingRef.current) {
      const rect = revenueSharingRef.current.getBoundingClientRect();
      setRevenueSharingPosition(rect.top + window.scrollY);
    }
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update position when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (revenueSharingRef.current) {
        const rect = revenueSharingRef.current.getBoundingClientRect();
        setRevenueSharingPosition(rect.top + window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <div style={{width: '100%', minHeight: '100vh', position: 'relative', background: 'black', overflowX: 'hidden'}}>
        {/* Top blurred background */}
        <div
          style={{
            width: "100%",
            height: isMobile ? 250 : 447,
            position: "absolute",
            top: isMobile ? 300 : 547,
            left: 0,
            overflow: "hidden",
            filter: "blur(122px) brightness(0.65)",
            WebkitFilter: "blur(122px) brightness(0.65)",
          }}
        >
          {/* Base muted background */}
          <div style={{ display: "flex", width: "100%", height: "100%" }}>
            <div style={{ flex: 1, background: "#D3C6F2" }} />
            <div style={{ flex: 3, background: "#D3C6F2" }} />
            <div style={{ flex: 3, background: "#D3C6F2" }} />
            <div style={{ flex: 1, background: "#D3C6F2" }} />
          </div>

          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
            }}
          >
            <div
              style={{
                flex: 1,
                background:
                  "radial-gradient(ellipse 490.73% 112.17% at 658.41% 50%, #F0E394 0%, #EDE091 25%, #E7D78A 42%, #DBC77D 57%, #CBB16B 71%, #B79554 84%, #9E7338 96%, #94662D 100%)",
              }}
            />
            <div
              style={{
                flex: 3,
                background:
                  "radial-gradient(ellipse 99.90% 112.01% at 97.52% 50.07%, #F0E394 0%, #EDE091 25%, #E7D78A 42%, #DBC77D 57%, #CBB16B 71%, #B79554 84%, #9E7338 96%, #94662D 100%)",
              }}
            />
            <div
              style={{
                flex: 3,
                background:
                  "radial-gradient(ellipse 107.56% 112.01% at -12.53% 49.93%, #F0E394 0%, #EDE091 25%, #E7D78A 42%, #DBC77D 57%, #CBB16B 71%, #B79554 84%, #9E7338 96%, #94662D 100%)",
              }}
            />
            <div
              style={{
                flex: 1,
                background:
                  "radial-gradient(ellipse 490.73% 112.17% at -558.42% 50%, #F0E394 0%, #EDE091 25%, #E7D78A 42%, #DBC77D 57%, #CBB16B 71%, #B79554 84%, #9E7338 96%, #94662D 100%)",
              }}
            />
          </div>
        </div>

        {/* Bottom blurred background block - Positioned relative to RevenueSharing component */}
        <div
          style={{
            width: "100%",
            height: isMobile ? 250 : 490,
            position: "absolute",
            // Position relative to the RevenueSharing component
            top: revenueSharingPosition - (isMobile ? 100 : 200),
            left: isMobile ? -100 : -225,
            overflow: "hidden",
            boxShadow: "350px 350px 350px",
            filter: "blur(175px) brightness(0.45)",
            WebkitFilter: "blur(175px) brightness(0.45)",
            display: "flex",
            justifyContent: "flex-end",
            transform: "translateZ(0)",
            WebkitTransform: "translateZ(0)",
            zIndex: 1, // Ensure it stays behind content
          }}
        >
          {/* Base muted background */}
          <div
            style={{
              display: "flex",
              width: isMobile ? "60%" : "40%",
              height: "100%",
            }}
          >
            <div style={{ flex: 1, background: "#D3C6F2" }} />
            <div style={{ flex: 5, background: "#D3C6F2" }} />
            <div style={{ flex: 5, background: "#D3C6F2" }} />
            <div style={{ flex: 1, background: "#D3C6F2" }} />
          </div>

          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              display: "flex",
              width: isMobile ? "60%" : "40%",
              height: "100%",
            }}
          >
            <div
              style={{
                flex: 1,
                background:
                  "radial-gradient(ellipse 490.73% 112.17% at 658.41% 50%, #F0E394 0%, #EDE091 25%, #E7D78A 42%, #DBC77D 57%, #CBB16B 71%, #B79554 84%, #9E7338 96%, #94662D 100%)",
              }}
            />
            <div
              style={{
                flex: 5,
                background:
                  "radial-gradient(ellipse 99.90% 112.01% at 97.52% 50.07%, #F0E394 0%, #EDE091 25%, #E7D78A 42%, #DBC77D 57%, #CBB16B 71%, #B79554 84%, #9E7338 96%, #94662D 100%)",
              }}
            />
            <div
              style={{
                flex: 5,
                background:
                  "radial-gradient(ellipse 107.56% 112.01% at -12.53% 49.93%, #F0E394 0%, #EDE091 25%, #E7D78A 42%, #DBC77D 57%, #CBB16B 71%, #B79554 84%, #9E7338 96%, #94662D 100%)",
              }}
            />
            <div
              style={{
                flex: 1,
                background:
                  "radial-gradient(ellipse 490.73% 112.17% at -558.42% 50%, #F0E394 0%, #EDE091 25%, #E7D78A 42%, #DBC77D 57%, #CBB16B 71%, #B79554 84%, #9E7338 96%, #94662D 100%)",
              }}
            />
          </div>
        </div>

        <div style={{
          width: '100%', 
          paddingTop: isMobile ? 80 : 160, 
          paddingBottom: isMobile ? 60 : 120, 
          left: 0, 
          marginTop: isMobile ? 30 : 57, 
          flexDirection: 'column', 
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          gap: isMobile ? 100 : 200, 
          display: 'inline-flex',
          position: 'relative',
          zIndex: 2, // Ensure content stays above the background
        }}>
          <div style={{
            width: isMobile ? '90%' : 720, 
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'center', 
            gap: 40, 
            display: 'flex'
          }}>
            <div style={{
              display: 'flex',
              padding: '6px 12px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '16px',
              backdropFilter: 'blur(2px)',
              WebkitBackdropFilter: 'blur(2px)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <CustomBorderCard/>
            </div>
          </div>
           
          {/* Standbase Image Container */}
          <div
            style={{
              display: 'flex',
              width: isMobile ? '400px' : 1200,
              height: isMobile ? '600px' : 600,
              padding: isMobile ? '231px 0' : '0',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
              borderRadius: 20,
              background: 'linear-gradient(0deg, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.40) 100%)',
              boxShadow: '0px 20px 71px 0px rgba(158,115,56,0.37)',
              overflow: 'hidden',
              position: 'relative',
              borderRight: '2px solid black',
              borderBottom: '2px solid black',
            }}
          >
            {/* Top transparent border effect */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(to right, transparent, black, transparent)',
                zIndex: 11,
              }}
            />

            {/* Left vertical gradient */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '1.7px',
                background:
                  'linear-gradient(to bottom, black, lightgray, #EDE091, lightgray, black)',
                zIndex: 10,
              }}
            />

            <img
              src="/cardstandbase.png"
              alt="IMVI Content"
              style={{
                position: 'absolute',
                top: isMobile ? '-5%' : '-10%',
                right: 0,
                width: isMobile ? '120%' : '130%',
                height: isMobile ? '120%' : '130%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* TestApp Component with gap */}
          <div style={{marginTop: isMobile ? '20px' : '40px'}} id="testapp">
            <TestApp />
          </div>

          {/* Information Component with gap */}
          <div style={{marginTop: isMobile ? '20px' : '40px'}} id="information">
            <Information />
          </div>
        
          {/* Features Component with gap */}
          <div style={{marginTop: isMobile ? '20px' : '40px'}} id="features">
            <Features />
          </div>

          {/* RevenueSharing Component with gap and ref */}
          <div 
            ref={revenueSharingRef}
            style={{marginTop: isMobile ? '20px' : '40px', position: 'relative', zIndex: 2}} 
            id="sharing"
          >
            <RevenueSharing />
          </div>
        
          {/* Connected Component with gap */}
          <div style={{marginTop: isMobile ? '20px' : '40px'}} id="social">
            <Connected />
          </div>
          
          {/* FAQs Component with gap */}
          <div style={{marginTop: isMobile ? '20px' : '40px'}} id="faqs">
            <FAQs />
          </div>  
        </div>
      </div>
    </>
  );
};  

export default LandingPage;