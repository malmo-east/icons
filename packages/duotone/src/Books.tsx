import * as React from "react";
import { SVGProps } from "react";

const SvgBooks = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="books_svg__fa-primary"
      d="M0 128h128V96H0v32zm0 288h128v-31.1L0 384v32zm160 0h127.1v-31.1H160V416zm350.9 39.3-16.48-61.67-122.7 33.05 16.44 61.66c4.527 16.98 22 27.12 38.9 22.57l61.29-16.52c16.95-4.59 27.05-22.09 22.55-39.09zm-90.4-339.1-122.8 33 65.77 246.7 122.7-33.04L420.5 116.2zm-24.7-92.54c-4.527-16.98-22-27.12-38.9-22.57l-61.37 16.52c-16.9 4.551-26.99 22.11-22.46 39.09L283.55 96H160v32h127.1v-15.36l1.525 5.723 122.7-33.05L395.8 23.66z"
    />
    <path
      d="M0 384h128V128H0v256zM96 .003H31.1C14.38.003 0 14.38 0 32v63.1h128V32C128 14.38 113.6.002 96 .002zM0 479.1c0 17.62 14.38 31.1 31.1 31.1h64c17.62 0 31.1-14.37 31.1-31.1L128 416H0v63.1zM412.3 85.32 289.5 118.4l8.223 30.83 122.7-33.04-8.123-30.87zm73.9 277.48-122.7 33.04 8.221 30.83 122.7-33.05-8.221-30.82zM160 384h127.1V128H160v256zm0 95.1c0 17.62 14.38 31.1 32 31.1h63.1c17.62 0 31.98-14.36 31.1-31.98V414.2H159.1l.9 64.9zM273.1 56.71c-3.574-13.41 2.162-26.9 12.96-34.34C281.906 9.51 270.23.01 256.02.01h-63.1c-17.63 0-32 14.37-32 31.1L160 96h123.6l-10.5-39.29z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBooks;
