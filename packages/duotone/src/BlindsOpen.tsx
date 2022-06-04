import * as React from "react";
import { SVGProps } from "react";

const SvgBlindsOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="blinds-open_svg__fa-primary"
      d="M512 16v32c0 8.84-7.2 16-16 16H128v146.9c18.6 6.6 32 24.2 32 45.1 0 26.51-21.49 48-48 48s-48-21.5-48-48c0-20.87 13.4-38.45 32-45.06V64H16C7.164 64 0 56.84 0 48V16C0 7.162 7.164 0 16 0h480c8.8 0 16 7.162 16 16z"
    />
    <path
      d="M96 64H16L0 112h96V64zm400 0H128v48h384l-16-48zM96 210.9V192H16L0 240h66.94c4.85-13.5 15.5-24.2 29.06-29.1zm32-18.9v18.94c13.6 4.86 24.2 15.56 29.1 29.06H512l-16-48H128zM16 320 0 368h512l-16-48H16zm0 144L0 512h512l-16-48H16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBlindsOpen;
