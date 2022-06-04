import * as React from "react";
import { SVGProps } from "react";

const SvgBlanket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M400 384H88c-4.422 0-8 3.578-8 8s3.578 8 8 8h312c26.47 0 48-21.53 48-48V104c0-39.7-32.3-72-72-72H72C32.3 32 0 64.3 0 104v288c0 48.5 39.47 88 88 88h352c4.422 0 8-3.578 8-8s-3.578-8-8-8H88c-39.7 0-72-32.3-72-72s32.3-72 72-72h312c17.64 0 32 14.36 32 32s-14.4 32-32 32zm0-80H88c-29.79 0-56.07 14.96-72 37.67V104c0-30.88 25.12-56 56-56h304c30.88 0 56 25.12 56 56v212.5c-8.5-7.7-19.7-12.5-32-12.5z" />
  </svg>
);

export default SvgBlanket;
