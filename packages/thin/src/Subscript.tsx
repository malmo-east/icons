import * as React from "react";
import { SVGProps } from "react";

const SvgSubscript = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M344 80c4.4 0 8-3.58 8-8s-3.6-8-8-8l-24 .01a7.987 7.987 0 0 0-6.297 3.053L176 243 38.3 67.06a8.024 8.024 0 0 0-6.3-3.05L8 64c-4.422 0-8 3.58-8 8s3.578 8 8 8h20.11L165.8 256 28.11 432H8c-4.422 0-8 3.6-8 8s3.578 8 8 8h24a8.008 8.008 0 0 0 6.297-3.072L176 268.1l137.7 175.1c1.5 3.7 3.8 4.8 6.3 4.8h24c4.422 0 8-3.578 8-8s-3.578-8-8-8h-20.11L186.2 256 323.9 80H344zm144 416h-24V360c0-4.422-3.578-8-8-8h-32c-4.4 0-8 3.6-8 8s3.578 8 8 8h24v128h-24c-4.422 0-8 3.578-8 8s3.6 8 8 8h64c4.422 0 8-3.578 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgSubscript;
