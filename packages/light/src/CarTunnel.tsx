import * as React from "react";
import { SVGProps } from "react";

const SvgCarTunnel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 32C132.3 32 32 132.3 32 256v240c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V256C0 114.6 114.6 0 256 0s256 114.6 256 256v240c0 8.8-7.2 16-16 16s-16-7.2-16-16V256c0-123.7-100.3-224-224-224zm-48 368c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm96 0c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm-182.6-70.9 23.3-71.9c6.4-19.8 24.9-33.2 45.7-33.2h131.2c20.8 0 39.3 13.4 45.7 33.2l23.3 71.9c15.3 10 25.4 27.3 25.4 46.9v120c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H128v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V376c0-19.6 10.1-36.9 25.4-46.9zM158 320h195.1l-16.3-52.9c-2.1-6.6-8.2-11.1-15.2-11.1H190.4c-7 0-13.1 4.5-15.2 11.1L158 320zm-30 128h256v-72c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v72z" />
  </svg>
);

export default SvgCarTunnel;