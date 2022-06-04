import * as React from "react";
import { SVGProps } from "react";

const SvgBookOpenCover = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="book-open-cover_svg__fa-primary"
      d="m313.1 511.2-288-63.1C10.42 443.1 0 430.1 0 416V64.01c0-20.82 19.56-36.09 39.76-31.04L64 39.03v325.6c0 14.1 10.42 27.98 25.06 31.24L320 447.2l230.9-51.32c14.7-3.28 25.1-16.18 25.1-31.18V39.03l24.24-6.058C620.4 27.92 640 43.19 640 64.01v351.1c0 14.1-10.42 27.99-25.06 31.24l-288 63.1c-4.54 2.85-9.34 2.85-13.84 1.75z"
    />
    <path
      d="M64 32.4v323.1L304 416V40.02L100.9.388C81.5-2.65 64 12.54 64 32.4zM539.1.388 336 40.02V416l240-59.62V32.4c0-19.86-17.5-35.049-36.9-32.012z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBookOpenCover;
