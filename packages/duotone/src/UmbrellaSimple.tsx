import * as React from "react";
import { SVGProps } from "react";

const SvgUmbrellaSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="umbrella-simple_svg__fa-primary"
      d="M288 34.19V32c0-17.67-14.33-32-32-32s-32 14.33-32 32v2.188C108.6 48.36 16.65 137.8.318 251.6-2.436 270.8 13 288 32.55 288h446.9c19.55 0 34.99-17.19 32.24-36.38C495.3 137.8 403.4 48.36 288 34.19z"
    />
    <path
      d="M223.1 432.1c0 8.814-7.188 16-16 16-7.814 0-13.19-5.314-15.1-10.69a31.894 31.894 0 0 0-40.81-19.5c-16.69 5.875-25.41 24.19-19.5 40.79C143.8 490.6 174.2 512 207.1 512c45 0 80.9-35.9 80.9-80.9V288h-64.9v144.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUmbrellaSimple;
