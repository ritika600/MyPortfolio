import React from "react";
function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
     
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75",marginLeft:"41%" }}
      >
        Made with love by Ritika
      </span>
    </div>
  );
}

export default Footer;
