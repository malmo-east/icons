import * as React from "react";
import { SVGProps } from "react";

const SvgStarOfDavid = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="star-of-david_svg__fa-primary"
      d="M110.1 310.6 76.37 256l-55.1 89.38C6.366 369.6 24.81 399.1 54.39 399.1l225.1-.001 34.4-55.1H89.48L110.1 310.6zM256 73.77 279.59 112l67.39-.001-57.87-93.1c-11.1-17.67-34.94-23.29-53.22-12.56-5.313 3.119-9.784 7.422-13.01 12.56L110 201.3l33.8 54.7L256 73.77zM490.7 345.4 381.4 168h-67.48l108.5 175.1h-41.19l-34.39 56h110.7c29.66 0 48.06-29.5 33.16-53.7z"
    />
    <path
      d="M198 343.1 89.48 168h41.04l34.49-56H54.39c-29.59 0-48.04 30.41-33.12 54.62l109.3 177.4H198zm58 95.1-23.59-38.25-67.4.001 57.87 93.1c11.1 17.67 34.94 23.29 53.22 12.56 5.313-3.119 9.785-7.42 13.01-12.56l112.9-183.3L368.3 256 256 438.2zM457.6 112H232.5l-35.4 56h224.5l-20.53 33.29L435.6 256l55.1-89.38c14.9-24.22-3.5-54.62-33.1-54.62z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgStarOfDavid;
