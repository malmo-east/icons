import * as React from "react";
import { SVGProps } from "react";

const SvgScannerTouchscreen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="scanner-touchscreen_svg__fa-primary"
      d="M168 0c13.3 0 24 10.75 24 24v40h-64V24c0-13.25 10.7-24 24-24h16zm160 0c13.3 0 24 10.75 24 24v40h-64V24c0-13.25 10.7-24 24-24h16zM224 16c0-8.836 7.2-16 16-16s16 7.164 16 16v48h-32V16zm192 0v256c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.836 7.2-16 16-16s16 7.164 16 16zm32 8c0-13.25 10.7-24 24-24h16c13.3 0 24 10.75 24 24v240c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24V24zM264 160c13.3 0 24 10.7 24 24v240c0 13.3-10.7 24-24 24H88c-13.25 0-24-10.7-24-24V184c0-13.3 10.75-24 24-24h176z"
    />
    <path
      d="M288 96c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V160c0-35.3 28.65-64 64-64h224zM88 160c-13.25 0-24 10.7-24 24v240c0 13.3 10.75 24 24 24h176c13.3 0 24-10.7 24-24V184c0-13.3-10.7-24-24-24H88z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgScannerTouchscreen;
