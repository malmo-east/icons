import * as React from "react";
import { SVGProps } from "react";

const SvgDisplayArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="display-arrow-down_svg__fa-primary"
      d="M424 464h-72l-16-48h-96l-16 48h-72c-13.2 0-24 10.8-24 24s10.8 24 24 24h272c13.25 0 24-10.75 24-24s-10.7-24-24-24zM312 64v142.1l39.03-39.03c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94l-80 80c-9.375 9.375-24.56 9.375-33.94 0l-80-80c-9.375-9.375-9.375-24.56 0-33.94C195.7 162.3 201.8 160 208 160s12.28 2.344 16.97 7.031L264 206.1V64H64v288h448V64H312z"
    />
    <path
      d="M576 48v320c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h216v64H64v288h448V64H312V0h216c26.5 0 48 21.5 48 48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDisplayArrowDown;
