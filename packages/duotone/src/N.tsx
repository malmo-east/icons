import * as React from "react";
import { SVGProps } from "react";

const SvgN = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      d="M384 64.01v384c0 13.47-8.438 25.5-21.09 30.09A31.78 31.78 0 0 1 352 480a32.022 32.022 0 0 1-24.59-11.52L64 152.4V448c0 17.67-14.31 32-32 32S0 465.67 0 448V64c0-13.47 8.438-25.5 21.09-30.09 12.62-4.516 26.84-.75 35.5 9.609L320 359.6V64c0-17.67 14.31-32 32-32s32 14.34 32 32.01z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgN;
