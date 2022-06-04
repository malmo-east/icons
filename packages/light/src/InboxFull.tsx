import * as React from "react";
import { SVGProps } from "react";

const SvgInboxFull = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M508.3 304.9 447.05 56.2C443.5 42 430.7 32 416 32H96c-14.69 0-27.47 10-31.03 24.25L3.72 304.95A126.947 126.947 0 0 0 0 335.5V432c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-96.47c0-10.33-1.2-20.63-3.7-30.63zM96 64h319.1l55.18 224H368c-6.062 0-11.59 3.438-14.31 8.844L326.1 352H185.9l-27.6-55.2c-2.7-5.4-8.2-8.8-14.3-8.8H40.84L96 64zm384 368c0 8.822-7.178 16-16 16H48c-8.82 0-16-7.2-16-16v-96.47c0-5.23 1.04-10.33 1.88-15.53h100.2l27.58 55.16C164.4 380.6 169.9 384 176 384h160c6.062 0 11.59-3.438 14.31-8.844L377.9 320h100.2c0 5.2 1.9 10.3 1.9 15.5V432zM368 256c8.8 0 16-7.2 16-16s-7.2-16-16-16H144c-8.8 0-16 7.2-16 16s7.2 16 16 16h224zm-192-80h160c8.8 0 16-7.2 16-16s-7.162-16-16-16H176c-8.8 0-16 7.2-16 16s7.2 16 16 16z" />
  </svg>
);

export default SvgInboxFull;
