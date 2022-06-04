import * as React from "react";
import { SVGProps } from "react";

const SvgB = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M236.1 246.4C276.4 229.1 304 189.7 304 144c0-61.75-50.2-112-112-112H8c-4.422 0-8 3.58-8 8v432c0 4.4 3.578 8 8 8h192c66.17 0 120-53.83 120-120 0-53.2-35.9-97.9-83.9-113.6zM16 48h176c52.94 0 96 43.06 96 96s-43.06 96-96 96H16V48zm184 416H16V256h184c57.34 0 104 46.66 104 104s-46.7 104-104 104z" />
  </svg>
);

export default SvgB;
