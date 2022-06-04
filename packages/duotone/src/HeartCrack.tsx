import * as React from "react";
import { SVGProps } from "react";

const SvgHeartCrack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="heart-crack_svg__fa-primary"
      d="M319.5 125.3c1.2 3.2.2 5.8-2.4 8.8l-90.7 75.6 60.4 98.1c2.1 3.4 1.4 7.8-1.7 10.4-4 2.5-7.6 2.4-10.5-.3l-112-104c-2.5-1.5-2.6-3.6-2.6-5.8-.9-3 .8-4.2 2.3-5.8l75.5-75.4-50.7-77.47c21.7 6.91 41 18.63 56.9 34.58L255.1 96l12-11.99c9.6-8.72 19.3-16.18 29.7-22.27l22.7 63.56z"
    />
    <path
      d="M119.4 44.1c23.3-3.88 46.8-1.9 67.7 5.33l50.7 77.47-75.5 75.4c-1.5 1.6-3.2 2.8-2.3 5.9 0 2.1.1 4.2 2.6 5.7l112 104c2.9 2.7 6.5 2.8 10.5.3 3.1-2.6 3.8-7 1.7-10.4l-60.4-98.1 90.7-75.6c2.6-3 3.6-5.6 2.4-8.8l-22.7-63.56c28.6-16.71 62.4-23.21 95.8-17.64 68.9 11.48 119.4 71.1 119.4 141v5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.59 300.4C17.23 272.1 0 232.4 0 190.9v-5.8C0 115.2 50.52 55.58 119.4 44.09v.01z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHeartCrack;