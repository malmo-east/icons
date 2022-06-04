import * as React from "react";
import { SVGProps } from "react";

const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M456 32c13.3 0 24 10.75 24 24s-10.7 24-24 24H88c-22.09 0-40 17.91-40 40v272c0 22.1 17.91 40 40 40h336c22.1 0 40-17.9 40-40V216c0-22.1-17.9-40-40-40H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h304c48.6 0 88 39.4 88 88v176c0 48.6-39.4 88-88 88H88c-48.6 0-88-39.4-88-88V120c0-48.6 39.4-88 88-88h368zM352 304c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z" />
  </svg>
);

export default SvgWallet;