import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownSmallBig = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M288 192h128c17.67 0 32-14.33 32-32V64c0-17.6-14.4-32-32-32H288.9c-17.67 0-32 14.33-32 32v96c-.9 17.6 13.5 32 31.1 32zM272 64c0-8.822 7.178-16 16-16h128c8.822 0 16 7.178 16 16v96c0 8.822-7.178 16-16 16H288.9c-8.822 0-16-7.178-16-16V64zm208 192H288.9c-17.67 0-32 14.33-32 32v160c0 17.67 14.33 32 32 32H480c17.67 0 32-14.33 32-32V288c0-17.7-14.3-32-32-32zm16 192c0 8.822-7.178 16-16 16H288.9c-8.822 0-16-7.178-16-16V288c0-8.822 7.178-16 16-16H480c8.822 0 16 7.178 16 16v160zm-317.9-77.3L104 451.5V40c0-4.41-3.6-8-8-8s-8 3.59-8 8v411.5l-74.1-80.85a8.04 8.04 0 0 0-5.906-2.594 7.953 7.953 0 0 0-5.406 2.094c-3.25 3.002-3.469 8.064-.5 11.32l88 96.02c3.062 3.312 8.75 3.312 11.81 0l88-96.02c2.969-3.252 2.75-8.314-.5-11.32-3.198-2.95-8.298-2.75-11.298.55z" />
  </svg>
);

export default SvgArrowDownSmallBig;