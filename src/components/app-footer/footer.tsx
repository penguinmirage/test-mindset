import React from "react";
import "./footer.css";

interface FooterProps {
  count: number;
}

const Footer: React.FC<FooterProps> = ({ count }) => {
  return (
    <div className="todo-count">
      <span>{count} items left</span>
    </div>
  );
};

export default Footer;
