import * as React from "react";
import { SVGProps } from "react";

const SvgPlaneUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0c35 0 64 60.92 64 96.88v81.92l183 104.8c5 3 9 8 9 14v65c0 10.9-11.9 18.9-21 15.9l-171-48.9v69.9l56.1 43.9c4 3 7.9 7 7.9 12v40c0 11-10 18-20 16l-108-32-109 32c-10 3-19-5-19-16v-40c0-5 2-9 6-12l58-43.9v-69.9L20 378.5c-10 3-20-5-20-15.9v-65c0-5 3-12 8-14l184-104.8V95.88C192 60.92 220 0 256 0zm-64 312.6V196.8L16 297.6v65l176-50zm128-115.8v115.8l175 50 1-65-176-100.8zM256 15.98c-23 0-48 48.94-48 79.9V407.5l-64 47.9v40l112-32 112 33v-41l-64-47.9V95.88c0-30.96-26-79.9-48-79.9z" />
  </svg>
);

export default SvgPlaneUp;
