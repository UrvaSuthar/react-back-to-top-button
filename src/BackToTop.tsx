import React, { useState, useEffect } from "react";

interface BackToTopProps {
  size?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  backgroundColor?: string;
  textColor?: string;
  icon?: React.ReactNode;
  scrollThreshold?: number;
  transitionDuration?: number;
}

const BackToTop: React.FC<BackToTopProps> = ({
  size = 50,
  position = "bottom-right",
  backgroundColor = "#000",
  textColor = "#fff",
  icon = "⬆️",
  scrollThreshold = 300,
  transitionDuration = 300,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPositionStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = { position: "fixed", margin: "20px" };
    switch (position) {
      case "top-left":
        return { ...baseStyle, top: 0, left: 0 };
      case "top-right":
        return { ...baseStyle, top: 0, right: 0 };
      case "bottom-left":
        return { ...baseStyle, bottom: 0, left: 0 };
      case "bottom-right":
      default:
        return { ...baseStyle, bottom: 0, right: 0 };
    }
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        ...getPositionStyle(),
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundColor,
        color: textColor,
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        transition: `opacity ${transitionDuration}ms ease-in-out`,
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
      }}
      aria-label="Back to top"
      role="button"
    >
      {icon}
    </button>
  );
};

export default BackToTop;
