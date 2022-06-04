import * as React from "react";
import { SVGProps } from "react";

const SvgRug = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M80 64v384H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h8v-40h-8c-13.25 0-24-10.7-24-24s10.75-24 24-24h8v-32h-8c-13.25 0-24-10.7-24-24s10.75-24 24-24h8v-32h-8c-13.25 0-24-10.7-24-24s10.75-24 24-24h8v-40h-8c-13.25 0-24-10.7-24-24 0-13.25 10.75-24 24-24h56zm32 0h416v384H112V64zm504 48h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56V64h56c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24z" />
  </svg>
);

export default SvgRug;
