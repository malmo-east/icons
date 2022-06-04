import * as React from "react";
import { SVGProps } from "react";

const SvgCouch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="couch_svg__fa-primary"
      d="M592 224c-26.5 0-48 21.5-48 48v80H96v-80c0-26.5-21.49-48-48-48S0 245.5 0 272v192c0 8.8 7.164 16 16 16h64c8.836 0 15.1-7.164 15.1-16l.9-16h448v16c0 8.836 7.164 16 16 16h64c8.836 0 16-7.164 16-16V272c0-26.5-21.5-48-48-48z"
    />
    <path
      d="M128 272v48h384v-48c0-38.63 27.53-70.95 64-78.38V160c0-70.69-57.31-128-128-128H191.1c-70.69 0-128 57.31-128 128l.9 33.6c36.5 7.5 64 39.8 64 78.4z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCouch;
