import * as React from "react";
import { SVGProps } from "react";

const SvgCircleA = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm21.8-339.2c-7.842-17.08-35.75-17.08-43.59 0l-95.99 208.1c-5.547 12.09-.297 26.43 11.73 31.99 12.09 5.588 26.28.313 31.86-11.77l12.03-26.18h124.3l12.03 26.18a23.986 23.986 0 0 0 21.81 14c3.359 0 6.781-.723 10.05-2.229 12.03-5.559 17.28-19.91 11.73-31.99L277.8 124.8zm-62.7 154.8 40.9-87.1 40.02 87.14H215.1z" />
  </svg>
);

export default SvgCircleA;
