import * as React from "react";
import { SVGProps } from "react";

const SvgStarHalf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="star-half_svg__fa-primary"
      d="m288 439.8-128.2 68.5c-10.8 5.7-23.9 4.8-33.8-2.3-9.9-7.1-14.9-19.3-12.8-31.3l24.6-146.6L33.58 225.9c-8.61-8.6-11.67-21.2-7.89-32.8 3.77-11.5 13.74-19.9 25.73-21.6L195 150.3l64.4-132.33C264.7 6.995 275.8.013 287.1-.04l.9 439.84zM433.2 512c-1.1.1-2.2.1-3.3 0h3.3z"
    />
    <path
      d="M146.3 512c-1 .1-2.1.1-3.2 0h3.2zM288 439.8V-.039h.1c12.3 0 23.5 6.993 28.8 18.009l64.3 132.33 143.7 21.2c11.9 1.7 21.9 10.1 25.7 21.6 3.8 11.6.7 24.2-7.9 32.8L438.5 328.1l24.6 146.6c2 12-3 24.2-12.9 31.3-9.9 7.1-23 8-33.7 2.3l-128.4-68.5h-.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgStarHalf;
