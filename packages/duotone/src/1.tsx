import * as React from "react";
import { SVGProps } from "react";

const Svg1 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path
      d="M256 448c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h64V123.8l-46.25 30.8c-14.73 9.9-34.56 5.8-44.375-8.8-9.797-14.7-5.828-34.6 8.875-44.4l96-64c9.828-6.547 22.45-7.187 32.84-1.594A31.992 31.992 0 0 1 160 64.01v352h64c17.7-.01 32 14.29 32 31.99z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default Svg1;
