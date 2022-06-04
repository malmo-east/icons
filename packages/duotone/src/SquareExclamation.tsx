import * as React from "react";
import { SVGProps } from "react";

const SvgSquareExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-exclamation_svg__fa-primary"
      d="M224 337.1c-17.36 0-31.44 14.08-31.44 31.44C192.6 385.9 206.6 400 224 400s31.44-14.08 31.44-31.44C255.4 351.2 241.4 337.1 224 337.1zm0-33.1c13.25 0 24-10.75 24-24V152c0-13.2-10.7-24-24-24s-24 10.8-24 24v128c0 13.3 10.8 24 24 24z"
    />
    <path
      d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM200 152c0-13.2 10.8-24 24-24s24 10.75 24 24v128c0 13.25-10.75 24-24 24s-24-10.7-24-24V152zm24 248c-17.36 0-31.44-14.08-31.44-31.44s14.07-31.44 31.44-31.44 31.44 14.08 31.44 31.44C255.4 385.9 241.4 400 224 400z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareExclamation;
