import * as React from "react";
import { SVGProps } from "react";

const SvgGripVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M40 480c-22.09 0-40-17.9-40-40v-48c0-22.1 17.91-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40zm48-40v-48H40v48h48zm144 40c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48zm48-40v-48h-48v48h48zM0 232c0-22.1 17.91-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40v-48zm40 0v48h48v-48H40zm192 88c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48zm48-40v-48h-48v48h48zM0 72c0-22.09 17.91-40 40-40h48c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40V72zm40 0v48h48V72H40zm192 88c-22.1 0-40-17.9-40-40V72c0-22.09 17.9-40 40-40h48c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40h-48zm48-40V72h-48v48h48z" />
  </svg>
);

export default SvgGripVertical;
