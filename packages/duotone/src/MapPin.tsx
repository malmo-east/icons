import * as React from "react";
import { SVGProps } from "react";

const SvgMapPin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="map-pin_svg__fa-primary"
      d="M32 144C32 64.47 96.47 0 176 0c79.5 0 144 64.47 144 144 0 79.5-64.5 144-144 144-79.53 0-144-64.5-144-144zm80 0c0-35.3 28.7-64 64-64 8.8 0 16-7.16 16-16s-7.2-16-16-16c-53.9 0-96 42.98-96 96 0 8.8 7.16 16 16 16 8.8 0 16-7.2 16-16z"
    />
    <path
      d="M176 288c10.1 0 21.7-1.2 32-3.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V284.4c10.3 2.4 21 3.6 32 3.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMapPin;
