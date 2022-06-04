import * as React from "react";
import { SVGProps } from "react";

const SvgChampagneGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path
      className="champagne-glass_svg__fa-primary"
      d="M191.5 220.5c3.825 29.45-16.42 57.48-47.11 65.18a67.374 67.374 0 0 1-32.83 0C80.9 277.1 60.65 249.9 64.34 221.5L77.99 128h100l13.51 92.5z"
    />
    <path
      d="m168.7 64 22.86 156.5c3.825 29.45-16.42 57.48-47.11 65.18a67.423 67.423 0 0 1-32.83 0C80.9 277.1 60.65 249.9 64.34 221.5l23-157.5h81.36zm27.5-64H59.77c-15.1 0-29.49 11.75-31.74 27.38L1.033 212.3c-8.248 63.5 34.23 120.3 94.97 135.5V464H56.01c-22.12 0-39.99 17.88-39.99 40 0 4.375 3.624 8 7.999 8h207.1c4.374 0 7.998-3.625 7.998-8 0-22.12-17.87-40-39.99-40h-39.99V347.7c60.74-15.25 103.2-71.96 94.98-135.5l-26.99-184.9C225.7 11.75 212.2 0 196.2 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChampagneGlass;
