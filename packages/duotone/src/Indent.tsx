import * as React from "react";
import { SVGProps } from "react";

const SvgIndent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="indent_svg__fa-primary"
      d="M127.8 243.4c7.3 6.4 7.3 18.8 0 25.2L25.82 347.9C15.31 356.1 0 348.6 0 335.3V176.7c0-13.3 15.31-20.8 25.82-12.6l101.98 79.3z"
    />
    <path
      d="M416 32c17.7 0 32 14.33 32 32s-14.3 32-32 32H32C14.33 96 0 81.67 0 64s14.33-32 32-32h384zm0 128c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32h192zM192 320c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32zm224 96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h384z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgIndent;
