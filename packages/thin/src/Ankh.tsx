import * as React from "react";
import { SVGProps } from "react";

const SvgAnkh = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M280 280H179.3c42.79-44.6 84.2-110 84.2-163.3C263.5 44.72 223.8 0 160 0S56.53 44.72 56.53 116.7c0 53.28 41.41 118.7 84.2 163.3H40c-4.41 0-8 3.6-8 8s3.594 8 8 8h112v208c0 4.4 3.6 8 8 8s8-3.578 8-8V296h112c4.4 0 8-3.6 8-8s-3.6-8-8-8zM160 16c54.78 0 87.47 37.64 87.47 100.7 0 55.16-50.41 123.8-87.47 160.2-37.1-36.4-87.47-105.1-87.47-160.2C72.53 53.64 105.2 16 160 16z" />
  </svg>
);

export default SvgAnkh;
