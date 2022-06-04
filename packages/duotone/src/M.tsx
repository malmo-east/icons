import * as React from "react";
import { SVGProps } from "react";

const SvgM = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      d="M448 64.01v384c0 17.67-14.31 32-32 32s-32-14.33-32-32V169.7L250.6 369.8c-11.88 17.81-41.38 17.81-53.25 0L64 169.7V448c0 17.67-14.31 32-32 32S0 465.67 0 448V64c0-14.09 9.219-26.55 22.72-30.63 13.47-4.156 28.09 1.141 35.91 12.88L224 294.3 389.4 46.2c7.812-11.73 22.47-17.03 35.91-12.88C438.8 37.47 448 49.92 448 64.01z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgM;
