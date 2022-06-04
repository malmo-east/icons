import * as React from "react";
import { SVGProps } from "react";

const SvgInboxOut = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="inbox-out_svg__fa-primary"
      d="M137.4 150.6c-12.5-12.5-12.5-32.75 0-45.25l96-96c12.5-12.5 32.75-12.5 45.25 0l96 96c12.5 12.5 12.5 32.75 0 45.25-6.25 6.3-14.45 9.4-22.65 9.4s-16.38-3.125-22.62-9.375L288 109.3V288c0 17.69-14.31 32-32 32s-32-14.3-32-32V109.3l-41.4 41.3c-12.5 12.5-32.7 12.5-45.2 0z"
    />
    <path
      d="M480 320h-96l-32 64H160l-32-64H32c-17.67 0-32 14.33-32 32v112c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48V352c0-17.7-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgInboxOut;
