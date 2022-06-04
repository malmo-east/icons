import * as React from "react";
import { SVGProps } from "react";

const SvgSignHanging = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M88 0c13.3 0 24 10.75 24 24v40h376c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24H112v376c0 13.3-10.7 24-24 24-13.25 0-24-10.7-24-24V112H24c-13.25 0-24-10.7-24-24 0-13.25 10.75-24 24-24h40V24C64 10.75 74.75 0 88 0zm56 176c0-17.7 14.3-32 32-32h272c17.7 0 32 14.3 32 32v176c0 17.7-14.3 32-32 32H176c-17.7 0-32-14.3-32-32V176zm288 160V192H192v144h240z" />
  </svg>
);

export default SvgSignHanging;
