import * as React from "react";
import { SVGProps } from "react";

const SvgR = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M228.7 309.7C282 288.6 320 236.8 320 176c0-79.41-64.59-144-144-144H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32s32-14.33 32-32V320h93.43l104.5 146.6c6.25 8.75 16.09 13.42 26.09 13.42 6.422 0 12.91-1.922 18.55-5.938 14.39-10.27 17.73-30.25 7.484-44.64L228.7 309.7zM64 96.01h112c44.11 0 80 35.89 80 80s-35.89 79.1-80 79.1H64V96.01z" />
  </svg>
);

export default SvgR;
