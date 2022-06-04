import * as React from "react";
import { SVGProps } from "react";

const SvgChalkboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M568 464h-24V56c0-13.22-10.8-24-24-24H56c-13.22 0-24 10.78-24 24v408H8c-4.406 0-8 3.6-8 8s3.594 8 8 8h560c4.406 0 8-3.594 8-8s-3.6-8-8-8zm-296 0v-64h160v64H272zm160-80H272c-8.8 0-16 7.2-16 16v64H48V56c0-4.406 3.594-8 8-8h464c4.406 0 8 3.594 8 8v408h-80v-64c0-8.8-7.2-16-16-16z" />
  </svg>
);

export default SvgChalkboard;
