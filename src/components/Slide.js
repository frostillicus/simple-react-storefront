import React, { useEffect, useState } from "react";

// https://dev.to/michalczaplinski/super-easy-react-mount-unmount-animations-with-hooks-4foj

const Slide = ({ showCart, children }) => {
  const [shouldRender, setRender] = useState(showCart);

  useEffect(() => {
    if (showCart) setRender(true);
  }, [showCart]);

  const onAnimationEnd = () => {
    if (!showCart) setRender(false);
  };

  return (
    shouldRender && (
      <div
        style={{
          zIndex: "1000",
          position: "relative",
          animation: `${showCart ? "slideIn" : "slideOut"} 0.5s`
        }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default Slide;
