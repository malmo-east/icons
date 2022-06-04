import * as React from "react";
import { SVGProps } from "react";

const SvgPianoKeyboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="piano-keyboard_svg__fa-primary"
      d="M576 96v128H448v80c0 8.875-7.125 16-16 16h-32c-8.9 0-16-7.1-16-16v-80h-64v80c0 8.875-7.125 16-16 16h-32c-8.9 0-16-7.1-16-16v-80h-64v80c0 8.9-7.1 16-16 16h-32c-8.9 0-16-7.1-16-16v-80H0V96c0-17.62 14.38-32 32-32h512c17.6 0 32 14.38 32 32z"
    />
    <path
      d="M576 224v192c0 17.62-14.38 32-32 32H32c-17.62 0-32-14.38-32-32V224h64v160h448V224h64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPianoKeyboard;
