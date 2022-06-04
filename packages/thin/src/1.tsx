import * as React from "react";
import { SVGProps } from "react";

const Svg1 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M256 472c0 4.406-3.578 8-8 8H8c-4.422 0-8-3.6-8-8s3.578-8 8-8h112V53.94L36.03 102.9c-3.83 2.2-8.7.9-10.94-2.9s-.93-8.69 2.88-10.91l96-56c2.484-1.438 5.531-1.469 8.016-.031S136 37.13 136 40v424h112c4.4 0 8 3.6 8 8z" />
  </svg>
);

export default Svg1;
