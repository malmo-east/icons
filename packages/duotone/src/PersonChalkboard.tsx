import * as React from "react";
import { SVGProps } from "react";

const SvgPersonChalkboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="person-chalkboard_svg__fa-primary"
      d="M320 128V48c0-26.51 21.5-48 48-48h224c26.5 0 48 21.49 48 48v224c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48v-48h64v32h192V64H384v64h-64z"
    />
    <path
      d="M240 48c0 26.51-21.5 48-48 48s-48-21.49-48-48 21.5-48 48-48 48 21.49 48 48zm-56 304v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9l-28.57 47.6c-9.1 15.1-28.76 20-43.91 10.9-15.15-9.1-20.05-28.7-10.94-43.9l58.27-96.9C112.2 145.7 143.4 128 177.1 128H400c17.7 0 32 14.3 32 32s-14.3 32-32 32H264v288c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h-16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPersonChalkboard;
