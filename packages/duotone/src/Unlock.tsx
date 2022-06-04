import * as React from "react";
import { SVGProps } from "react";

const SvgUnlock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="unlock_svg__fa-primary"
      d="M0 256c0-35.3 28.65-64 64-64h320c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V256z"
    />
    <path
      d="M224 64c-44.2 0-80 35.82-80 80v48H80v-48C80 64.47 144.5 0 224 0c57.5 0 107 33.69 130.1 82.27 7.6 15.96.8 35.03-16 42.63-16 7.6-34.2.8-41.8-15.2C283.4 82.63 255.9 64 224 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUnlock;
