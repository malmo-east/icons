import * as React from "react";
import { SVGProps } from "react";

const SvgCircleCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M200 96c4.4 0 8 3.58 8 8v24h96v-24c0-4.42 3.6-8 8-8s8 3.58 8 8v24h16c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h16v-24c0-4.42 3.6-8 8-8zm-8 72v-24h-16c-17.7 0-32 14.3-32 32v32h224v-32c0-17.7-14.3-32-32-32h-16v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24h-96v24c0 4.4-3.6 8-8 8s-8-3.6-8-8zm-48 56v112c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V224H144zm368 32c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 16C123.5 16 16 123.5 16 256s107.5 240 240 240 240-107.5 240-240S388.5 16 256 16z" />
  </svg>
);

export default SvgCircleCalendar;
