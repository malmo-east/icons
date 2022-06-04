import * as React from "react";
import { SVGProps } from "react";

const SvgBookBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 384V32c0-17.67-14.33-32-32-32H64C28.66 0 0 28.65 0 64v391.1c0 30.93 25.07 56 56 56l383.1.9c5.3 0 8.9-3.6 8.9-8a8.009 8.009 0 0 0-8.008-8.008H416v-79.99C433.7 416 448 401.7 448 384zM176 16h160v215.1l-74.94-61.31C259.6 168.6 257.8 168 256 168s-3.594.61-5.062 1.812L176 231.1V16zm224 479.1H56c-23.38 0-42.13-20.14-39.8-43.99 2.016-20.78 20.7-36.02 41.57-36.02L400 416v79.1zm-344-96c-15.68 0-29.82 6.516-40 16.93V64c0-26.47 21.53-48 48-48h96v232a8.019 8.019 0 0 0 4.562 7.234c2.812 1.344 6.094.906 8.5-1.047L256 186.3l82.94 67.84c1.46 1.26 3.26 1.86 5.06 1.86 1.156 0 2.344-.25 3.438-.766C350.2 253.9 352 251.1 352 248V16h64c8.836 0 16 7.164 16 16v352c0 8.824-7.18 15.1-16 15.1H56z" />
  </svg>
);

export default SvgBookBookmark;
