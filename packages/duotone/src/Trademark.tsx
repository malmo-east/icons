import * as React from "react";
import { SVGProps } from "react";

const SvgTrademark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="trademark_svg__fa-primary"
      d="M224 96.01H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h64v223.1c0 17.69 14.33 31.99 32 31.99s32-14.3 32-31.99V160h64c17.67 0 32-14.31 32-32s-14.3-31.99-32-31.99z"
    />
    <path
      d="M640 128v256c0 17.69-14.33 32-32 32s-32-14.31-32-32V224l-86.41 115.2c-12.06 16.12-39.13 16.12-51.19 0L352 224v160c0 17.69-14.33 32-32 32s-32-14.31-32-32V128c0-13.78 8.812-26 21.88-30.34 13.08-4.406 27.45.125 35.72 11.16L464 266.7l118.4-157.8c8.266-11 22.7-15.53 35.72-11.16C631.2 102 640 114.2 640 128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTrademark;
