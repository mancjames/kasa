import React, { useState, useRef } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "../styles/Accordion.css";

export default function Accordion(props) {
  const [isActive, setIsActive] = useState(false);
  const [setHeight, setHeightState] = useState("0px");
  const content = useRef();

  function toggleAccordion() {
    setIsActive(!isActive);
    setHeightState(isActive ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <article className="accordion__item">
      <div className="accordion__title" onClick={toggleAccordion}>
        <div aria-expanded={isActive}>
          <h5>{props.title}</h5>
        </div>
        <div className="accordion__icon">
          {isActive ? (
            <KeyboardArrowDownIcon style={{ fontSize: 45 }} />
          ) : (
            <KeyboardArrowUpIcon style={{ fontSize: 45 }} />
          )}
        </div>
      </div>
      <div
        ref={content}
        style={{ height: `${setHeight}` }}
        className={`accordion__content`}
        aria-expanded={!isActive}
      >
        <h5 className="accordion__content-text">{props.content}</h5>
      </div>
    </article>
  );
}
