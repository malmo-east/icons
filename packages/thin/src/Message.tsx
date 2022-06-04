import * as React from "react";
import { SVGProps } from "react";

const SvgMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1 15.1c26.47 0 48 21.53 48 47.1v287.1c0 26.46-21.53 47.1-48 47.1H297.8l-122.7 92.08V396.4h-112c-26.47 0-48-21.53-48-47.1V62.2c0-26.46 21.53-47.1 48-47.1h384zm0-15.1h-384C27.85 0-.9 28.75-.9 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.72 6.8 14.72 13.1 14.72 2.369 0 4.786-.745 6.948-2.323l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0z" />
  </svg>
);

export default SvgMessage;
