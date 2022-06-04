import * as React from "react";
import { SVGProps } from "react";

const SvgChild = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M427.4 105.8c-7.844-10.72-22.92-12.98-33.55-5.172l-68.39 50.16c-59.22 43.44-143.6 43.44-202.8 0l-68.39-50.16C43.56 92.83 28.48 95.09 20.64 105.8c-7.83 10.7-5.51 25.7 5.17 33.6l68.39 50.16c10.7 7.84 22.1 14.34 33.8 20.04V488c0 13.3 10.8 24 24 24s24-10.75 24-24V384h96v104c0 13.25 10.75 24 24 24s24-10.7 24-24V209.6c11.71-5.725 23.09-12.24 33.8-20.1l68.39-50.16c10.71-7.84 13.01-22.84 5.21-33.54zM272 336h-96V226.1c15.7 3.5 31.6 5.9 48 5.9s32.34-2.414 48-5.916V336zm-48-192c39.75 0 72-32.25 72-72S263.8 0 224 0s-72.9 32.25-72.9 72 33.2 72 72.9 72z" />
  </svg>
);

export default SvgChild;
