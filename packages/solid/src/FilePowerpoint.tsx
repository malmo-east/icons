import * as React from "react";
import { SVGProps } from "react";

const SvgFilePowerpoint = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M256 0v128h128L256 0zm-32 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zm55.6 180.1c4.6 45.4-31.1 83.9-75.6 83.9h-44v40c0 8.8-7.2 16-16 16h-16c-8.836 0-16-7.164-16-16V256c0-8.836 7.164-16 16-16h71.51c39.79 0 76.09 28.5 80.09 68.1zM160 344h44c15.44 0 28-12.56 28-28s-12.6-28-28-28h-44v56z" />
  </svg>
);

export default SvgFilePowerpoint;
