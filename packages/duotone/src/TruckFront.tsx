import * as React from "react";
import { SVGProps } from "react";

const SvgTruckFront = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="truck-front_svg__fa-primary"
      d="M432 0c44.2 0 80 35.82 80 80v288c0 44.2-35.8 80-80 80H80c-44.18 0-80-35.8-80-80V80C0 35.82 35.82 0 80 0h352zm-32 224-17.9-71.8c-3.6-15.1-16.4-24.2-31.1-24.2H160.1c-13.8 0-26.6 9.1-30.2 24.2L112 224h288zM96 288c-17.67 0-32 14.3-32 32s14.33 32 32 32c17.7 0 32-14.3 32-32s-14.3-32-32-32zm320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"
    />
    <path
      d="m112 224 17.9-71.8c3.6-15.1 16.4-24.2 30.2-24.2H351c14.7 0 27.5 9.1 31.1 24.2L400 224H112zM32 480v-48c13.37 10 29.99 16 48 16h48v32c0 17.7-14.3 32-32 32H64c-17.67 0-32-14.3-32-32zm352 0v-32h48c18 0 34.6-6 48-16v48c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTruckFront;
