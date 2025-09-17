import React, { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const headerOffset = 80;

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setMenuOpen(false);
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "How It Works", id: "information" },
    { label: "Why IMVI?", id: "features" },
    { label: "Sharing", id: "sharing" },
    { label: "Social", id: "social" },
    { label: "FAQs", id: "faqs" },
  ];

  // Reset menu when resizing back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* Header Row */}
      <div className="w-full py-3.5 bg-black/10 backdrop-blur-xl">
        <div className="flex justify-between items-center px-5 max-w-[1200px] mx-auto">
          {/* Logo */}
          <div className="w-32 h-8 flex items-center">
            <img
              src="/IMVILogo.png"
              alt="IMVI Logo"
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleScroll(item.id)}
                className="px-2.5 py-1.5 flex justify-center items-center gap-2.5 cursor-pointer group"
              >
                <div
                  className={`text-sm font-normal leading-5 transition-colors duration-200
                  ${index === 0 ? "text-white" : "text-[#B0B0B0]"} group-hover:text-white`}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Auth + Menu Toggle */}
          <div className="flex items-center gap-4">

            {/* Desktop Sign Up */}
            <a 
              href="https://imvi.me/pages/sign-up-for-a-imvi-me-custom-player-card" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex px-2.5 py-1.5 bg-[#E6E6E6] shadow-md rounded-md cursor-pointer hover:bg-white transition-colors duration-200"
            >
              <div className="text-sm font-normal text-black">Sign Up</div>
            </a>

            {/* Desktop Sign In */}
            <a 
              href="https://imvi.me/account/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex px-2.5 py-1.5 bg-[#E6E6E6] shadow-md rounded-md cursor-pointer hover:bg-white transition-colors duration-200"
            >
              <div className="text-sm font-normal text-black">Sign In</div>
            </a>

            {/* Mobile Auth + Options */}
            <div className="flex md:hidden items-center gap-3">
              <a 
                href="https://imvi.me/pages/sign-up-for-a-imvi-me-custom-player-card" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 bg-[#E6E6E6] rounded-md text-black text-sm cursor-pointer"
              >
                Sign Up
              </a>
              <a 
                href="https://imvi.me/account/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 bg-[#E6E6E6] rounded-md text-black text-sm cursor-pointer"
              >
                Sign In
              </a>
              {/* Options / X */}
              {!menuOpen ? (
                <img
                  src="/options.png"
                  alt="Menu"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setMenuOpen(true)}
                />
              ) : (
                <div
                  className="w-6 h-6 flex items-center justify-center cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-white text-2xl">&times;</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black z-40 mt-[60px] md:hidden overflow-y-auto">
          <div className="flex flex-col items-center gap-16 py-10">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleScroll(item.id)}
                className="cursor-pointer text-lg font-normal text-[#B0B0B0] hover:text-white transition-colors duration-200"
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;