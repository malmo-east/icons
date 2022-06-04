import * as React from "react";
import { SVGProps } from "react";

const SvgSuitcase = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 96h-80V40c0-22.06-17.9-40-40-40H168c-22.1 0-40 17.94-40 40v56H48c-26.51 0-48 21.5-48 48v288c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48V144c0-26.5-21.5-48-48-48zM144 40c0-13.22 10.78-24 24-24h176c13.22 0 24 10.78 24 24v56H144V40zM88 464H48c-17.64 0-32-14.36-32-32V144c0-17.64 14.36-32 32-32h40v352zm320 0H104V112h304v352zm88-32c0 17.64-14.36 32-32 32h-40V112h40c17.64 0 32 14.36 32 32v288z" />
  </svg>
);

export default SvgSuitcase;
