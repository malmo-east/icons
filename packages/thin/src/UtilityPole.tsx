import * as React from "react";
import { SVGProps } from "react";

const SvgUtilityPole = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M504 32c-4.406 0-8 3.578-8 8v40h-48V40c0-4.42-3.6-8-8-8s-8 3.58-8 8v40H288V24c0-13.23-10.8-24-24-24h-16c-13.2 0-24 10.77-24 24v56H80V40c0-4.42-3.59-8-8-8s-8 3.58-8 8v40H16V40c0-4.42-3.59-8-8-8s-8 3.58-8 8v72c0 17.67 14.33 32 32 32h65.58L224 228.3V504c0 4.4 3.6 8 8 8s8-3.578 8-8V144h32v360c0 4.422 3.594 8 8 8s8-3.6 8-8V228.3L414.4 144H480c17.67 0 32-14.33 32-32V40c0-4.42-3.6-8-8-8zm-264-8c0-4.406 3.594-8 8-8h16c4.406 0 8 3.594 8 8v56h-32V24zm-16 185.1L126.4 144H224v65.1zm64 0V144h97.58L288 209.1zM496 112c0 8.8-7.2 16-16 16H32c-8.82 0-16-7.2-16-16V96h480v16z" />
  </svg>
);

export default SvgUtilityPole;
