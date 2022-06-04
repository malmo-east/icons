import * as React from "react";
import { SVGProps } from "react";

const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M472 32c4.4 0 8 3.58 8 8s-3.6 8-8 8H72c-30.93 0-56 25.07-56 56v304c0 30.9 25.07 56 56 56h368c30.9 0 56-25.1 56-56V184c0-30.9-25.1-56-56-56H72c-4.42 0-8-3.6-8-8s3.58-8 8-8h368c39.8 0 72 32.2 72 72v224c0 39.8-32.2 72-72 72H72c-39.76 0-72-32.2-72-72V104c0-39.76 32.24-72 72-72h400zm-32 264c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40zm-40-24c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" />
  </svg>
);

export default SvgWallet;
