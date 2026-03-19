import React, {useEffect, useRef} from "react";
import "./Top.scss";

export default function Top() {
  const buttonRef = useRef(null);

  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    function scrollFunction() {
      if (!buttonRef.current) {
        return;
      }

      const isVisible =
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;

      buttonRef.current.style.visibility = isVisible ? "visible" : "hidden";
    }

    window.addEventListener("scroll", scrollFunction);
    scrollFunction();

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <button ref={buttonRef} onClick={TopEvent} id="topButton" title="Go to top">
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
