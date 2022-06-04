import * as React from "react";
import { SVGProps } from "react";

const SvgGripVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="grip-vertical_svg__fa-primary"
      d="M40 480c-22.09 0-40-17.9-40-40v-48c0-22.1 17.91-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40zm0-160c-22.09 0-40-17.9-40-40v-48c0-22.1 17.91-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40zM88 32c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40V72c0-22.09 17.91-40 40-40h48z"
    />
    <path
      d="M232 480c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48zm0-160c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48zm48-288c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40V72c0-22.09 17.9-40 40-40h48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGripVertical;
