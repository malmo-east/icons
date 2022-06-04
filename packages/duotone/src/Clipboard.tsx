import * as React from "react";
import { SVGProps } from "react";

const SvgClipboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="clipboard_svg__fa-primary"
      d="M256 64c0-35.35-28.65-64-64-64s-64 28.65-64 64c-35.35 0-64 28.65-64 64v16c0 8.8 7.16 16 16 16h224c8.8 0 16-7.2 16-16v-16c0-35.35-28.7-64-64-64zm-64-24c13.25 0 24 10.74 24 24 0 13.25-10.75 24-24 24s-24-10.75-24-24c0-13.26 10.7-24 24-24z"
    />
    <path
      d="M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.5-48-48V112c0-26.51 21.49-48 48-48h80c-35.35 0-64 28.65-64 64v16c0 8.8 7.16 16 16 16h224c8.8 0 16-7.2 16-16v-16c0-35.35-28.65-64-64-64h80c26.5 0 48 21.49 48 48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClipboard;
