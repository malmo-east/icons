import * as React from "react";
import { SVGProps } from "react";

const SvgChalkboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M552 432H416v-48c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v48H24c-13.25 0-24 10.7-24 24s10.75 24 24 24h528c13.25 0 24-10.75 24-24 0-13.3-10.7-24-24-24zm-184 0h-96v-32h96v32zM80 88c0-4.406 3.594-8 8-8h400c4.406 0 8 3.594 8 8v312h48V88c0-30.87-25.1-56-56-56H88c-30.87 0-56 25.13-56 56v312h48V88z" />
  </svg>
);

export default SvgChalkboard;