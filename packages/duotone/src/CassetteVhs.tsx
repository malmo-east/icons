import * as React from "react";
import { SVGProps } from "react";

const SvgCassetteVhs = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="cassette-vhs_svg__fa-primary"
      d="M80 304c0 30.88 11.99 58.74 31.13 80H160v-34.97c-24.89-8.691-38.01-35.88-29.32-60.77C135.5 274.5 146.3 263.8 160 258.1V224h-48.9C91.99 245.3 80 273.1 80 304zm336-80v34.1c24.89 8.693 38.01 35.88 29.32 60.77C440.5 333.5 429.7 344.2 416 349v34.97h48.87C484 362.7 496 334.9 496 304c0-30.87-11.99-58.74-31.13-79.1L416 224zM528 32H48C21.49 32 0 53.49 0 80v48h576V80c0-26.51-21.5-48-48-48z"
    />
    <path
      d="M0 432c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V128H0v304zm416-208h48.87C483.1 245.3 496 273.1 496 304s-12 58.75-31.13 80H416V224zm-192 0h128v159.1H224V224zm-112.9 0H160v159.1h-48.87C92 362.8 80 334.9 80 304s12-58.7 31.1-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCassetteVhs;
