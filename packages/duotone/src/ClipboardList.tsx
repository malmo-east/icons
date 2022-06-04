import * as React from "react";
import { SVGProps } from "react";

const SvgClipboardList = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="clipboard-list_svg__fa-primary"
      d="M256 64c0-35.35-28.65-64-64-64s-64 28.65-64 64c-35.35 0-64 28.65-64 64v16c0 8.8 7.16 16 16 16h224c8.8 0 16-7.2 16-16v-16c0-35.35-28.7-64-64-64zm-64 24c-13.3 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.7 24-24 24zM96 344c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24-10.7-24-24-24zm0-96c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.7 24-24-10.7-24-24-24z"
    />
    <path
      d="M336 64h-80c35.35 0 64 28.65 64 64v16c0 8.8-7.2 16-16 16H80c-8.84 0-16-7.2-16-16v-16c0-35.35 28.65-64 64-64H48C21.49 64 0 85.49 0 112v352c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V112c0-26.51-21.5-48-48-48zM96 392c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24-10.7 24-24 24zm0-96c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.8 24 24-10.7 24-24 24zm208 88H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.801 0 16 7.199 16 16 0 8.8-7.2 16-16 16zm0-96H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClipboardList;
