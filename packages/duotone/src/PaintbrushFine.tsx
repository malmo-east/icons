import * as React from "react";
import { SVGProps } from "react";

const SvgPaintbrushFine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="paintbrush-fine_svg__fa-primary"
      d="m284.3 370.9-79.2-79.2L480.4 16.4c21.9-21.867 57.3-21.867 79.2 0 21.9 21.87 21.9 57.33 0 79.2L284.3 370.9z"
    />
    <path
      d="m205.2 291.9 78.9 78.9c.1 0 .1.1.1.2 2.5 9.3 3.8 18.1 3.8 29 0 61.9-50.1 112-112 112H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h4.81c17.63 0 29.59-18.9 27.78-36.4-.39-3.8-.59-7.7-.59-11.6 0-61.9 50.1-112 112-112 10 0 19.8 1.3 29 3.8.1 0 .2 0 .2.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPaintbrushFine;
