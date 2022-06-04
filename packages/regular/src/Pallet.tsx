import * as React from "react";
import { SVGProps } from "react";

const SvgPallet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M616 464h-48v-96h48c13.25 0 24-10.75 24-24s-10.7-24-24-24H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h48v96H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h592c13.25 0 24-10.75 24-24s-10.7-24-24-24zm-320 0H120v-96h176v96zm224 0H344v-96h176v96z" />
  </svg>
);

export default SvgPallet;