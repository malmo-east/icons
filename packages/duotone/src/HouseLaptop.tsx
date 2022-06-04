import * as React from "react";
import { SVGProps } from "react";

const SvgHouseLaptop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="house-laptop_svg__fa-primary"
      d="M304 448V288c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v160h32c8.8 0 16 7.2 16 16 0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48 0-8.8 7.2-16 16-16h32zm240 0V304H352v144h192z"
    />
    <path
      d="M469.7 200.5c6.7 6.2 10.3 14.7 10.3 23.5H336c-19.1 0-36.3 8.4-48 21.7V208c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h63.1v128H112c-26.51 0-48-21.5-48-48V256H32c-13.17 0-25.004-8.1-29.802-20.3C-2.6 223.4.615 209.4 10.3 200.5l208-192.014a31.987 31.987 0 0 1 43.4 0l208 192.014z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHouseLaptop;
