import * as React from "react";
import { SVGProps } from "react";

const SvgChalkboardUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M192 352h-64C57.31 352 0 409.3 0 480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32 0-70.7-57.3-128-128-128zM49.61 464c7.43-36.5 39.76-64 78.39-64h64c38.63 0 70.96 27.53 78.39 64H49.61zM160 320c53.02 0 96-42.98 96-96s-42.98-96-96-96c-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96zm0-144c26.47 0 48 21.53 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM584 0H216c-30.9 0-56 25.12-56 56v24c0 13.25 10.75 24 24 24s24-10.75 24-24V56c0-4.406 3.594-8 8-8h368c4.406 0 8 3.594 8 8v304c0 4.406-3.594 8-8 8h-56v-32c0-17.67-14.33-32-32-32h-80c-17.67 0-32 14.33-32 32v32h-32c-13.25 0-24 10.75-24 24s10.8 24 24 24h232c30.88 0 56-25.12 56-56V56c0-30.88-25.1-56-56-56z" />
  </svg>
);

export default SvgChalkboardUser;