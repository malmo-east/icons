import * as React from "react";
import { SVGProps } from "react";

const SvgPenNib = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="pen-nib_svg__fa-primary"
      d="M368.4 18.34c21.9-21.866 57.3-21.866 79.2 0l46.1 46.06c21.8 21.87 21.8 57.3 0 79.2l-74.5 74.5L293.9 92.81l74.5-74.47z"
    />
    <path
      d="M293.9 92.81 419.2 218.1l-47.8 159.2c-6 19.9-21.2 35.7-40.9 42.3L66.17 508.2c-11.34 3.8-23.85 1-32.43-7.3L187.3 347.3c6.3 3 13.3 4.7 19.8 4.7 27.4 0 48-21.5 48-48s-20.6-48-48-48c-25.6 0-48 21.5-48 48 0 7.4 2.6 14.4 5.6 20.7L11.11 478.3a32.113 32.113 0 0 1-7.345-32.5L92.39 181.5c5.71-19.7 22.41-34.9 42.31-40.9l159.2-47.79z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPenNib;
