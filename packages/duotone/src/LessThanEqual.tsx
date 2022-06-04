import * as React from "react";
import { SVGProps } from "react";

const SvgLessThanEqual = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="less-than-equal_svg__fa-primary"
      d="M416 388.6H32c-17.67 0-32 13.29-32 29.71S14.33 448 32 448h384c17.67 0 32-13.29 32-29.71s-14.3-29.69-32-29.69z"
    />
    <path
      d="m52.11 208.2 320 118.8a34.029 34.029 0 0 0 11.88 2.118c12.7 0 24.72-7.051 29.73-18.69 6.562-15.23-1.422-32.53-17.83-38.62L150.2 180.6l245.7-91.26c16.41-6.093 24.39-23.39 17.83-38.62S388.6 28.15 372.1 34.21l-320 118.8C39.97 157.5 32 168.4 32 180.6s7.97 23.1 20.11 27.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLessThanEqual;
