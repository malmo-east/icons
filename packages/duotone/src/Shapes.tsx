import * as React from "react";
import { SVGProps } from "react";

const SvgShapes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="shapes_svg__fa-primary"
      d="M288 312c0-22.1 17.9-40 40-40h144c22.1 0 40 17.9 40 40v144c0 22.1-17.9 40-40 40H328c-22.1 0-40-17.9-40-40V312z"
    />
    <path
      d="M288 0c11.2 0 21.7 5.898 27.4 15.54l96 159.96c6 9.9 6.1 22.2.4 32.3-5.6 10-16.3 15.3-27.8 15.3H192c-11.5 0-22.2-5.3-27.8-15.3-5.7-10.1-5.6-22.4.4-32.3l96-159.96C266.3 5.897 276.8 0 288 0zM0 384c0-70.7 57.31-128 128-128 70.7 0 128 57.3 128 128s-57.3 128-128 128C57.31 512 0 454.7 0 384z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgShapes;
