import * as React from "react";
import { SVGProps } from "react";

const SvgShieldXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="shield-xmark_svg__fa-primary"
      d="M336.1 303c5.6 4.7 7.9 10.9 7.9 17 0 13.7-11.2 24-23.1 24a23.935 23.935 0 0 1-16.97-7.031L256 289.9l-47.03 47.03C204.3 341.7 198.1 344 192 344c-13.7 0-24-11.2-24-24a23.93 23.93 0 0 1 7.031-16.97L222.1 256 175 208.1c-4.7-3.8-7-10-7-16.1 0-12.79 10.3-24 24-24a23.93 23.93 0 0 1 16.97 7.031L256 222.1l47.03-47.03C307.7 170.3 313.9 168 320 168c13.71 0 24 11.21 24 24a23.93 23.93 0 0 1-7.031 16.97L289.9 256l46.2 47z"
    />
    <path
      d="m466.5 83.69-192-80.01C269.6 1.656 261.3 0 256.1 0c-5.3 0-13.6 1.656-18.5 3.688l-192 80.01C27.69 91.08 16 108.6 16 127.1 16 385.2 205.2 512 255.1 512c52 0 240.9-128.2 240.9-384.9 0-18.5-11.7-36.02-29.5-43.41zM336.1 303c5.6 4.7 7.9 10.9 7.9 17 0 13.7-11.2 24-23.1 24a23.935 23.935 0 0 1-16.97-7.031L256 289.9l-47.03 47.03C204.3 341.7 198.1 344 192 344c-13.7 0-24-11.2-24-24a23.93 23.93 0 0 1 7.031-16.97L222.1 256 175 208.1c-4.7-3.8-7-10-7-16.1 0-12.79 10.3-24 24-24a23.93 23.93 0 0 1 16.97 7.031L256 222.1l47.03-47.03C307.7 170.3 313.9 168 320 168c13.71 0 24 11.21 24 24a23.93 23.93 0 0 1-7.031 16.97L289.9 256l46.2 47z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgShieldXmark;
