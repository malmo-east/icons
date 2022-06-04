import * as React from "react";
import { SVGProps } from "react";

const SvgFileImage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m365.3 93.38-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.006 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6c0-16.9-6.7-33.2-18.7-45.22zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160V128c0 17.67 14.33 32 32 32h79.1v288zM215.3 292c-4.68 0-9.051 2.34-11.65 6.234L164 357.8l-11.68-17.53A13.937 13.937 0 0 0 140.7 334c-4.682 0-9.053 2.34-11.65 6.234l-46.67 70a13.996 13.996 0 0 0-.695 14.37C84.09 429.2 88.84 432 93.1 432h196c5.163 0 9.907-2.844 12.34-7.395a13.995 13.995 0 0 0-.695-14.37l-74.67-112C224.4 294.3 220 292 215.3 292zm-87.3-4c17.67 0 32-14.33 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
  </svg>
);

export default SvgFileImage;
