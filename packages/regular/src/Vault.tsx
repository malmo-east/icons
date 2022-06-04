import * as React from "react";
import { SVGProps } from "react";

const SvgVault = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M176 240c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm192 0c0 79.5-64.5 144-144 144S80 319.5 80 240 144.5 96 224 96s144 64.5 144 144zm-144-96c-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96 53 0 96-43 96-96 0-53.9-43-96-96-96zm272 32c0 17.8-9.7 33.3-24 41.6V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V217.6c-14.3-8.3-24-23.8-24-41.6 0-26.5 21.5-48 48-48s48 21.5 48 48zM0 64C0 28.65 28.65 0 64 0h448c35.3 0 64 28.65 64 64v352c0 35.3-28.7 64-64 64v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H112v8c0 13.3-10.7 24-24 24-13.25 0-24-10.7-24-24v-8c-35.35 0-64-28.7-64-64V64zm48 0v352c0 8.8 7.16 16 16 16h448c8.8 0 16-7.2 16-16V64c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16z" />
  </svg>
);

export default SvgVault;
