import * as React from "react";
import { SVGProps } from "react";

const SvgSquareE = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-e_svg__fa-primary"
      d="M296 176c13.3 0 24-10.7 24-24s-10.7-24-24-24H152c-13.2 0-24 10.8-24 24v208c0 13.3 10.8 24 24 24h144c13.25 0 24-10.75 24-24s-10.75-24-24-24H176v-56h88c13.3 0 24-10.7 24-24s-10.75-24-24-24h-88v-56h120z"
    />
    <path
      d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM264 232c13.3 0 24 10.8 24 24s-10.75 24-24 24h-88v56h120c13.25 0 24 10.75 24 24s-10.7 24-24 24H152c-13.2 0-24-10.7-24-24V152c0-13.2 10.8-24 24-24h144c13.3 0 24 10.8 24 24s-10.7 24-24 24H176v56h88z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareE;
