import * as React from "react";
import { SVGProps } from "react";

const SvgMoneyCheckPen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="money-check-pen_svg__fa-primary"
      d="M557.2 235.7c15.6-15.6 40.9-15.6 56.6 0l14.3 14.4c15.7 15.6 15.7 40.9 0 56.6l-29.4 29.4-70.9-71 29.4-29.4zm18.9 123L446.9 487.9c-4.1 4.1-9.3 7-14.9 8.4l-60.1 15.1c-5.5 1.3-11.2-.3-15.2-4.2-4-4-5.6-9.8-4.2-16.1l15-59.3c1.4-5.6 4.3-10.7 8.4-15.7l129.2-128.3 71 70.9z"
    />
    <path
      d="M0 128c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v64.6c-15.2 2-29.8 8.8-41.4 20.5L353.3 394.3c-8.2 8.2-14 18.5-16.8 29.8l-6 23.9H64c-35.35 0-64-28.7-64-64V128zm112 192h224c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16s7.2 16 16 16zm0-128c-8.8 0-16 7.2-16 16s7.2 16 16 16h320c8.8 0 16-7.2 16-16s-7.2-16-16-16H112z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMoneyCheckPen;
