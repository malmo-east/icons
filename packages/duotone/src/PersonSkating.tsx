import * as React from "react";
import { SVGProps } from "react";

const SvgPersonSkating = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="person-skating_svg__fa-primary"
      d="m173.8 276.8-93.6 93.7a31.895 31.895 0 0 0-9.376 22.62c0 24.75 22.57 32 31.88 32 8.252 0 16.5-3.125 22.63-9.375l91.89-92-30.13-30.12C182.1 288.6 177.7 282.9 173.8 276.8zM332.6 96.03 127.1 96c-16.9 0-31.14 14.3-31.14 32s14.24 32 31.99 32h105.5l-20.15 17.3c-21.1 18-22.3 40.8-22.3 48.6 0 16.93 6.8 33.22 18.68 45.1l78.26 78.25V432c0 17.75 14.25 32 32 32s32-14.25 32-32v-89.38c0-12.62-5.125-25-14.13-33.88l-61.01-61c.5-.5 1.25-.625 1.75-1.125l82.26-82.38c7.703-7.702 11.76-17.87 11.76-28.25.03-22.885-17.77-39.955-39.97-39.955zM399.1 0c-26.5 0-48.01 21.5-48.01 48s22.41 48 48.01 48c27.4 0 48.9-21.5 48.9-48S426.5 0 399.1 0z"
    />
    <path
      d="M399.1 448c-8.752 0-16 7.25-16 16s-6.4 16-16 16h-96.01c-8.75 0-16 7.25-16 16s7.252 16 16 16h96.01c26.5 0 48.01-21.5 48.01-48-.01-8.7-6.41-16-16.01-16zm-270 3.9c-11.34 0-11.2 9.36-22.65 9.36-4.074 0-8.163-1.516-11.21-4.625l-67.98-67.89c-3.063-3.125-7.165-4.688-11.27-4.688-4.102 0-8.203 1.562-11.27 4.688C1.563 391.8 0 395.9 0 400s1.563 8.203 4.688 11.27l67.88 67.98c9.377 9.375 21.59 14 33.96 14 13.23 0 38.57-8.994 38.57-25.36.002-11.19-9.898-15.99-15.998-15.99z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPersonSkating;
