import * as React from "react";
import { SVGProps } from "react";

const SvgGreaterThanEqual = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="greater-than-equal_svg__fa-primary"
      d="M416 416H32c-17.67 0-32 14.31-32 31.99S14.33 480 32 480h384c17.67 0 32-14.32 32-32.01S433.7 416 416 416z"
    />
    <path
      d="M34.28 331.9c5.016 12.53 17.03 20.12 29.73 20.12 3.953 0 7.969-.719 11.88-2.281l320-127.1C408 216.9 416 205.1 416 192s-7.969-24.85-20.11-29.72l-320-128c-16.47-6.594-35.05 1.406-41.61 17.84-6.56 16.43 1.42 35.05 17.83 41.61l245.7 98.28-245.7 98.29c-16.41 6.6-24.39 25.2-17.83 41.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGreaterThanEqual;
