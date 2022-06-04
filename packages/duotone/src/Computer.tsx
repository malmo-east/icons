import * as React from "react";
import { SVGProps } from "react";

const SvgComputer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="computer_svg__fa-primary"
      d="M400 32c26.5 0 48 21.49 48 48v256c0 26.5-21.5 48-48 48H266.7l10.6 32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.67 0-32-14.3-32-32s14.33-32 32-32h74.7l10.6-32H48c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h352zM64 96v224h320V96H64z"
    />
    <path
      d="M592 32c26.5 0 48 21.49 48 48v352c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48V80c0-26.51 21.5-48 48-48h64zm-48 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32zm0 96h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16zm16 208c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgComputer;
