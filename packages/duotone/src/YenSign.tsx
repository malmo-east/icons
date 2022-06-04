import * as React from "react";
import { SVGProps } from "react";

const SvgYenSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="yen-sign_svg__fa-primary"
      d="M159.1 198.3 261.4 46.25c9.8-14.71 29.6-18.68 44.4-8.88 14.7 9.81 18.6 29.67 8.8 44.38L192 265.7V448c0 17.7-14.3 32-32.9 32-16.8 0-32-14.3-32-32V265.7L5.374 81.75c-9.803-14.71-5.83-34.57 8.876-44.38 14.7-9.8 34.57-5.83 44.37 8.88L159.1 198.3z"
    />
    <path
      d="M128 265.7V288H48c-17.67 0-32-14.3-32-32s14.33-32 32-32h52.2l27.8 41.7zm64 22.3v-22.3l27.8-41.7H272c17.7 0 32 14.3 32 32s-14.3 32-32 32h-80zm-64 96H48c-17.67 0-32-14.3-32-32s14.33-32 32-32h80v64zm64 0v-64h80c17.7 0 32 14.3 32 32s-14.3 32-32 32h-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgYenSign;
