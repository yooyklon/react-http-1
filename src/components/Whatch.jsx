import React, { useEffect, useRef } from "react";

export default function Whatch({ name, timeZone, id, onRemoveItem }) {
  const clockRef = useRef();

  useEffect(() => {
    const id = setInterval(function () {
      let today = new Date();
      let localoffset = -(today.getTimezoneOffset() / 60);
      let destoffset = timeZone;

      let offset = destoffset - localoffset;
      let d = new Date(new Date().getTime() + offset * 3600 * 1000);

      clockRef.current.textContent = d.toLocaleTimeString();
      console.log("tick");
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="whatch">
      <h2 className="whatch-title">{name}</h2>
      <div ref={clockRef} className="clock"></div>
      <div
        className="watch-remove"
        onClick={() => onRemoveItem({ name, timeZone, id })}
      >
        &#10006;
      </div>
    </div>
  );
}
