import * as React from "react";
import { SVGProps } from "react";

const SvgListDropdown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="list-dropdown_svg__fa-primary"
      d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm64 320h384V192H64v224zm293.7-306.3 36.6 36.6c3.2 3.2 8.2 3.2 11.4 0l36.6-36.6c5.1-5.1 1.5-13.7-5.6-13.7h-73.4c-7.1 0-10.7 8.6-5.6 13.7z"
    />
    <path
      d="M384 232c13.3 0 24 10.7 24 24s-10.7 24-24 24H128c-13.3 0-24-10.7-24-24s10.7-24 24-24h256zm0 88c13.3 0 24 10.7 24 24s-10.7 24-24 24H128c-13.3 0-24-10.7-24-24s10.7-24 24-24h256z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgListDropdown;