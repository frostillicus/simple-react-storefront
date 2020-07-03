import React, { useEffect, useState } from "react";

// https://dev.to/michalczaplinski/super-easy-react-mount-unmount-animations-with-hooks-4foj

const Fade = ({ showCart, children }) => {
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
        style={{ zIndex: '100', animation: `${showCart ? "fadeIn" : "fadeOut"} 0.3s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default Fade;