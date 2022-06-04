import * as React from "react";
import { SVGProps } from "react";

const SvgHouseCrack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="house-crack_svg__fa-primary"
      d="M266.9 7.918c11.2-10.557 30.1-10.557 42.2 0l256 223.982c13.3 11.7 14.6 31.9 3 45.2-11.7 13.3-31.9 14.6-45.2 3L288 74.52 53.07 280.1c-13.3 11.6-33.51 10.3-45.152-3-11.638-13.3-10.29-33.5 3.012-45.2L266.9 7.918z"
    />
    <path
      d="m64.07 448-.05-177.5L288 74.52 512.1 270.6l.4 177.3c.1 35.4-28.6 64.1-64 64.1H326.4L288 448l80.8-67.3c7.8-6.6 7.7-18.6-.3-24.9l-117.9-92.6c-15.5-11.5-33.8 6.9-22.8 22L288 368l-85.5 71.2c-6 5.1-8.4 12.9-3.4 20.6l31.3 52.2H128.1c-35.36 0-64.01-28.6-64.03-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHouseCrack;
