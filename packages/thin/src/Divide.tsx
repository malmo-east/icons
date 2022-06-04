import * as React from "react";
import { SVGProps } from "react";

const SvgDivide = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 192c35.38 0 64-28.62 64-64s-28.62-64-64-64-64 28.63-64 64 28.6 64 64 64zm0-112c26.47 0 48 21.53 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm216 168H8c-4.422 0-8 3.6-8 8s3.578 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-216 72c-35.38 0-64 28.62-64 64s28.62 64 64 64 64-28.62 64-64-28.6-64-64-64zm0 112c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.5 48-48 48z" />
  </svg>
);

export default SvgDivide;
