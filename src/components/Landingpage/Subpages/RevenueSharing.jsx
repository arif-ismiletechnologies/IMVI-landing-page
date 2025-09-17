import React, { useState, useEffect } from "react";

const RevenueSharing = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Gradient border card wrapper (gradient only on left side)
    const GradientCard = ({ title, text }) => (
    <div
      className="relative rounded-xl transition-all duration-300 overflow-hidden group"
      style={{
        background: "#333", // default background same as Features
        padding: isMobile ? "15px" : "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: isMobile ? "10px" : "15px",
        flex: "1 0 0",
        minHeight: isMobile ? "140px" : "160px",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "black"; // only hovered card
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#333"; // revert on mouse leave
      }}
    >
      {/* Gradient border effect on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          padding: "1px",
          background: `
            linear-gradient(to right,
              #D6CA7E 0%,
              #B99C52 25%,
              #94662D 50%,
              transparent 100%
            )
          `,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <p
        style={{
          color: "#8A8A8A",
          fontFamily: "Geist, sans-serif",
          fontSize: isMobile ? "16px" : "18px",
          fontWeight: "400",
          lineHeight: "120%",
        }}
      >
        {title}
      </p>
      <p
        style={{
          color: "#FFFFFF",
          fontFamily: "Geist, sans-serif",
          fontSize: isMobile ? "18px" : "22px",
          fontWeight: "400",
          lineHeight: "120%",
        }}
      >
        {text}
      </p>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        width: isMobile ? "100%" : "1114px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: isMobile ? "10px" : "17px",
        margin: "0 auto",
        position: "relative",
        zIndex: 5,
        padding: isMobile ? "20px" : "0",
      }}
    >
      {/* Title + Arrow */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: isMobile ? "30px" : "60px",
          alignSelf: "stretch",
        }}
      >
        <div
          style={{
            display: "flex",
            width: isMobile ? "100%" : "433px",
            flexDirection: "column",
            alignItems: "flex-start",
            alignSelf: "stretch",
          }}
        >
          <h2
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: isMobile ? "32px" : "43px",
              fontWeight: 400,
              lineHeight: "120%",
              background:
                "linear-gradient(90deg, #F0E394 0%, #EDE091 15%, #E7D78A 30%, #DBC77D 50%, #CBB16B 65%, #B79554 80%, #9E7338 90%, #94662D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
              textAlign: isMobile ? "left" : "inherit",
            }}
          >
            Revenue Sharing
          </h2>
          <img
            src="/arrow.png"
            alt="Arrow"
            style={{
              width: "40px",
              marginTop: isMobile ? "10px" : "0px",
            }}
          />
        </div>
      </div>

      {/* Main Content Frame */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: isMobile ? "20px" : "20px",
          alignSelf: "stretch",
          marginTop: isMobile ? "30px" : "60px",
        }}
      >
        {/* Top Section with Logo + Right Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "flex-start",
            gap: "20px",
            alignSelf: "stretch",
          }}
        >
          {/* Logo Container */}
          <div
            style={{
              display: "flex",
              width: isMobile ? "100%" : "736px",
              height: isMobile ? "auto" : "340px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                height: isMobile ? "auto" : "340px",
                padding: isMobile ? "15px" : "20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                flexShrink: 0,
                alignSelf: "stretch",
                borderRadius: "10px",
                borderBottom: "0.1px solid #EDE091",
                borderLeft: "0.5px solid #EDE091",
                borderBottomLeftRadius: "10px",
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: isMobile ? "100%" : "556px",
                  height: isMobile ? "auto" : "186px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "30px",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/imvilogo3.png"
                  alt="IMVI Logo"
                  style={{
                    width: "100%",
                    height: isMobile ? "auto" : "184px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "20px",
              flex: "1 0 0",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <GradientCard
              title="Share in the Success"
              text="Clubs earn a percentage of every card sold"
            />
            <GradientCard
              title="Custom Branding Opportunities"
              text="Add logos, sponsors, and links to generate income from branded content"
            />
          </div>
        </div>

        {/* Bottom Cards Section */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "stretch",
            gap: "20px",
            alignSelf: "stretch",
          }}
        >
          <GradientCard
             title="Clubs Pay Nothing"
            text="NO out of pocket costs to clubs"
          />
          <GradientCard
            title="No Upfront Cost"
            text="Get started with no risk — earn as your content grows"
          />
        </div>
      </div>
    </div>
  );
};

export default RevenueSharing;
