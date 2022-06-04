import * as React from "react";
import { SVGProps } from "react";

const SvgPedestal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M320 64c-17.64 0-32 14.36-32 32s14.36 32 32 32 32-14.36 32-32-14.4-32-32-32zm0 48c-8.836 0-16-7.164-16-16 0-8.838 7.164-16 16-16s16 7.162 16 16c0 8.8-7.2 16-16 16zM128 64c-17.6 0-32 14.36-32 32s14.36 32 32 32 32-14.36 32-32-14.4-32-32-32zm0 48c-8.8 0-16-7.2-16-16 0-8.838 7.164-16 16-16s16 7.16 16 16c0 8.8-7.2 16-16 16zm312 384h-24V64c0-35.35-28.65-64-64-64H96C60.65 0 32 28.65 32 64v432H8c-4.422 0-8 3.6-8 8s3.578 8 8 8h432c4.422 0 8-3.594 8-8s-3.6-8-8-8zm-392 0V64c0-26.47 21.53-48 48-48h256c26.47 0 48 21.53 48 48l.021 432H48z" />
  </svg>
);

export default SvgPedestal;
