import * as React from "react";
import { SVGProps } from "react";

const Svg1 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M256 456c0 13.25-10.75 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h80V98.95L36.58 140.4c-11.28 7-26.05 3.5-33.017-7.8-6.954-11.3-3.422-26.1 7.857-33.04l104-64c7.391-4.562 16.7-4.734 24.28-.516A24.017 24.017 0 0 1 152 56v376h80c13.3 0 24 10.8 24 24z" />
  </svg>
);

export default Svg1;
