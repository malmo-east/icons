import * as React from "react";
import { SVGProps } from "react";

const SvgVectorCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="vector-circle_svg__fa-primary"
      d="M192 32c0-17.67 14.3-32 32-32h64c17.7 0 32 14.33 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V32zm80 48V48h-32v32h32zM0 224c0-17.7 14.33-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32v-64zm80 48v-32H48v32h32zm208 112c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h64zm-48 48v32h32v-32h-32zm144-208c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64zm80 48v-32h-32v32h32z"
    />
    <path
      d="M41.28 191.1C62.78 119.8 119.8 62.78 192 41.28V95.1c0 5.2.9 9.4 2.4 13.2-38.8 16.2-69.9 47.3-86.1 86.1-3.8-1.5-8-3.3-12.3-3.3H41.28zM96 319.1c4.3 0 8.5 0 12.3-1.5 16.2 38.8 47.3 69.9 86.1 86.1-1.5 3.8-2.4 8-2.4 12.3v54.7c-72.2-21.5-129.22-78.5-150.72-151.6H96zm374.7 0c-21.5 73.1-78.5 130.1-150.7 151.6V416c0-4.3-.9-8.5-2.4-12.3 38.8-16.2 69.9-47.3 86.1-86.1 3.8 1.5 8 1.5 12.3 1.5h54.7zm0-128H416c-4.3 0-8.5 1.8-12.3 3.3-16.2-38.8-47.3-69.9-86.1-86.1 1.5-3.8 2.4-8 2.4-13.2V41.28c72.2 21.5 129.2 78.52 150.7 149.82z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgVectorCircle;