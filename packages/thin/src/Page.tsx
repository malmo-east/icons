import * as React from "react";
import { SVGProps } from "react";

const SvgPage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 512H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h181.5c17 0 33.2 6.743 45.2 18.75l74.6 74.51c12 12.04 18.7 28.24 18.7 45.24V448c0 35.3-28.7 64-64 64zM64 496h256c26.5 0 48-21.5 48-48V138.5c0-12.7-5.1-24.9-14.1-33.9l-74.5-74.54c-9-9-21.2-14.06-33.9-14.06H64c-26.51 0-48 21.49-48 48v384c0 26.5 21.49 48 48 48z" />
  </svg>
);

export default SvgPage;
