import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsToEye = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="arrows-to-eye_svg__fa-primary"
      d="M133.5 243.9C158.6 193.6 222.7 112 320 112s161.4 81.6 186.5 131.9c3.8 7.7 3.8 16.5 0 24.2C481.4 318.4 417.3 400 320 400s-161.4-81.6-186.5-131.9c-3.8-7.7-3.8-16.5 0-24.2zM320 320c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z"
    />
    <path
      d="M112 78.06V40c0-13.25 10.7-24.9 24-24.9s24 11.65 24 24.9v96c0 13.3-10.7 24-24 24H40c-13.25 0-24.9-10.7-24.9-24s11.65-24 24.9-24h38.06L15.03 48.97c-9.373-9.37-9.373-24.57 0-33.94 9.37-9.373 24.57-9.373 33.94 0L112 78.06zm479-63.03c9.4-9.373 24.6-9.373 33.1 0 10.2 9.37 10.2 24.57 0 33.94L561.9 112H600c13.3 0 24 10.7 24 24s-10.7 24-24 24h-96c-13.3 0-24-10.7-24-24V40c0-13.25 10.7-24.9 24-24.9s24 11.65 24 24.9v38.06l63-63.03zM15.03 463l63.03-63H40c-13.25 0-24.9-10.7-24.9-24s11.65-24 24.9-24h96c13.3 0 24 10.7 24 24v96c0 13.3-10.7 24-24 24s-24-10.7-24-24v-38.1l-63.03 62.2c-9.37 10.2-24.57 10.2-33.94 0-9.373-8.5-9.373-23.7 0-33.1zM528 433.9V472c0 13.3-10.7 24-24 24s-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24s-10.7 24-24 24h-38.1l62.2 63c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-63-62.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowsToEye;