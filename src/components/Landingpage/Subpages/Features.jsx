import React, { useState, useEffect } from "react";

const Features = () => {
  const featuresData = [
    "Easy onboarding for clubs, teams, and players",
    "Mobile-first design with lightning-fast load times",
    "Unlock highlight videos with a single scan",
    "Seamlessly update new content to each card",
    "Built-in analytics to track viewer engagement",
    "Secure user profiles and permission-based access",
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Same GradientCard from RevenueSharing
  const GradientCard = ({ text }) => (
  <div
    className="relative bg-[#333] rounded-xl transition-all duration-300 hover:bg-black overflow-hidden group"
    style={{
      padding: isMobile ? "16px" : "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "10px",
      flex: "1 0 0",          // let flex grow normally
      minWidth: isMobile ? "100%" : "358px",
      minHeight: "92px",     // same min-height for both mobile and desktop
    }}
  >
    {/* Gradient border effect only on hover */}
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
        color: "#FFFFFF",
        fontFamily: "Geist, sans-serif",
        fontSize: isMobile ? "18px" : "22px",
        fontWeight: "400",
        lineHeight: "120%",
        alignSelf: "stretch",
      }}
    >
      {text}
    </p>
  </div>
);



  return (
    <div
      style={{
        width: isMobile ? "100%" : "1114px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        margin: "0 auto",
        padding: isMobile ? "20px" : "0",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          width: isMobile ? "100%" : "433px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "0px",
        }}
      >
        <h2
          style={{
            fontFamily: "Geist, sans-serif",
            fontSize: isMobile ? "32px" : "43px",
            fontWeight: "400",
            lineHeight: "120%",
            textAlign: isMobile ? "left" : "center",
            background:
              "linear-gradient(90deg, #F0E394 0%, #EDE091 15%, #E7D78A 30%, #DBC77D 50%, #CBB16B 65%, #B79554 80%, #9E7338 90%, #94662D 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            alignSelf: "stretch",
            margin: 0,
          }}
        >
          Why IMVI Stands Out
        </h2>

        <div
          style={{
            width: isMobile ? "40px" : "52px",
            height: isMobile ? "40px" : "52px",
            marginTop: isMobile ? "10px" : "0",
          }}
        >
          <img
            src="/arrow.png"
            alt="Arrow"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Features Grid */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexWrap: isMobile ? "nowrap" : "wrap", // wrap only on desktop
          alignItems: "flex-start",
          gap: "20px",
          marginTop: isMobile ? "40px" : "60px",
        }}
      >
        {featuresData.map((feature, i) => (
          <GradientCard key={i} text={feature} />
        ))}
      </div>

    </div>
  );
};

export default Features;
