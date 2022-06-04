import * as React from "react";
import { SVGProps } from "react";

const SvgFlagSwallowtail = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="flag-swallowtail_svg__fa-primary"
      d="M32 0C14.25 0 0 14.25 0 32v464c0 8.8 7.25 16 16 16h32c8.75 0 16-7.2 16-16V32C64 14.25 49.75 0 32 0z"
    />
    <path
      d="M506.4 344.5c6.016 7.156 7.344 17.12 3.406 25.59S497.3 384 487.1 384H64V32h423.1c9.326 0 17.83 5.406 21.76 13.88s2.609 18.44-3.406 25.59L391.4 208l115 136.5z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFlagSwallowtail;
