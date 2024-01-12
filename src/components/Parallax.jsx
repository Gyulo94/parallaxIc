import { useEffect, useState } from "react";
import text from "../images/text.png";
import desc1 from "../images/desc1.png";
import desc2 from "../images/desc2.png";
import desc3 from "../images/desc3.png";
import desc4 from "../images/desc4.png";
import "./Parallax.css";

export default function Parallax() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <div
        className="bg bg1"
        style={{
          backgroundPositionY: position / 2,
        }}
      >
        <img src={text} style={{ opacity: (position - 70) / -70 }} alt="" />
      </div>
      {/* <div
        className="bg bg2"
        style={{
          backgroundPositionY: position / -3,
        }}
      >
        <div>Happy New Year</div>
      </div> */}
      <div
        className="desc"
        style={{
          transform: `translateX(${-position}px)`,
        }}
      >
        <img src={desc1} alt="" />
      </div>
      <div
        className="desc2"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        <img src={desc2} alt="" />
      </div>
      <div
        className="desc3"
        style={{
          transform: `translateX(${-position}px)`,
        }}
      >
        <img src={desc3} alt="" />
      </div>
      <div
        className="desc4"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        <img src={desc4} alt="" />
      </div>
      <p
        className="desc5"
        style={{
          opacity: (position - 6700) / 200,
        }}
      >
        Be the Challenger
      </p>
      <p
        className="desc5"
        style={{
          opacity: (position - 7500) / 200,
        }}
      >
        Make Dreams Come True
      </p>
      <p
        className="desc5"
        style={{
          opacity: (position - 8200) / 200,
        }}
      >
        One Step at a Time
      </p>
      <p
        className="desc5"
        style={{
          opacity: (position - 8900) / 200,
        }}
      >
        IC will be with You
      </p>
    </div>
  );
}
