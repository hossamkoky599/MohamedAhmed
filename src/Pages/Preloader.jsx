import React, { useEffect, useState } from "react";
import "../assets/css/service.css";

function Preloader({ imageSrc, duration = 2000 }) {
  const [loading, setLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!loading) return null;

  return (
    <div className="preloader" role="status" aria-label="Loading content">
      <div className="preloader-wrapper large">
        <div className="preloader-ring gradient-ring"></div>
        {!imgError && imageSrc ? (
          <img
            src={imageSrc}
            alt="Loading"
            className="preloader-img fill"
            onError={() => setImgError(true)}
            draggable="false"
          />
        ) : (
          <div className="preloader-fallback">🍏</div>
        )}
      </div>
    </div>
  );
}

export default Preloader;
