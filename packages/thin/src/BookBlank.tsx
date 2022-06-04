import * as React from "react";
import { SVGProps } from "react";

const SvgBookBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 384V32c0-17.67-14.33-32-32-32H64C28.65 0 0 28.65 0 64v391.1c0 30.93 25.07 56 55.1 56l383.1.008c6.2-.008 9.8-2.708 9.8-8.008a8.007 8.007 0 0 0-8.006-8.008H416V416c17.7 0 32-14.3 32-32zM16 64c0-26.47 21.53-48 48-48h48v383.1l-56 .004c-15.68 0-29.82 6.516-40 16.93V64zm384 431.1H56c-23.38 0-42.12-20.14-39.81-43.98 2.02-20.78 20.7-36.02 41.58-36.02L400 416v79.1zm-272-96V16h288c8.836 0 16 7.164 16 16v352c0 8.824-7.178 16-16 16l-288-.9z" />
  </svg>
);

export default SvgBookBlank;