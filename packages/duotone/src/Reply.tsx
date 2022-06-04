import * as React from "react";
import { SVGProps } from "react";

const SvgReply = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="reply_svg__fa-primary"
      d="m8.31 189.9 176-151.1C199.72 25.5 224 36.291 224 56.96v303.1c0 20.7-24.31 31.45-39.69 18.16l-176-151.1c-11.063-10.52-11.094-27.72 0-37.22z"
    />
    <path
      d="M223.1 136.1c161.5 1.8 288.9 34 288.9 186.2 0 61.44-39.59 122.3-83.34 154.1-13.66 9.938-33.09-2.531-28.06-18.62 45.34-145-21.5-183.5-176.6-185.8V136.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgReply;
