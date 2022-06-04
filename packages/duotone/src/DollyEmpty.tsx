import * as React from "react";
import { SVGProps } from "react";

const SvgDollyEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="dolly-empty_svg__fa-primary"
      d="M104.9 0H32C14.33 0 0 14.33 0 32s14.33 32 32 32h72.94l92.22 276.7C213.5 327.9 233.7 320 256 320c.613 0 1.178.168 1.789.18L165.7 43.75C156.9 17.58 132.5 0 104.9 0zm469.5 309.9c-5.594-16.75-23.69-25.91-40.48-20.23l-202.5 67.51C344.1 373.4 352 393.7 352 416c0 .615-.172 1.186-.184 1.799l202.3-67.44C570.9 344.8 579.1 326.6 574.4 309.9z"
    />
    <path
      d="M256 320c-53.9 0-96 42.1-96 96s42.98 96 96 96 96-42.98 96-96-43-96-96-96zm0 128c-17.67 0-32-14.33-32-32s14.32-31.1 31.1-31.1S288 398.3 288 416c0 17.7-14.3 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDollyEmpty;
