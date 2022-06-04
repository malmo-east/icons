import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownSquareTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m304 224 128-.006c17.67 0 32-14.32 32-31.99V64c0-17.67-14.33-32-32-32H304c-17.67 0-32 14.33-32 32v128c0 17.7 14.3 32 32 32zM288 64c0-8.822 7.178-16 16-16h128c8.822 0 16 7.178 16 16v128c0 8.822-7.178 16-16 16H304c-8.822 0-16-7.178-16-16V64zm188.1 374.9-83.13-137.1c-5.562-9.188-15.25-13.78-24.94-13.78s-19.38 4.594-24.94 13.78l-83.25 137.1C248.9 457.1 262.6 480 284.9 480h166.3c22.2 0 35.9-22.9 24.9-41.1zm-13.5 18.8c-2.2 3.9-6.5 6.3-11.5 6.3H284.8c-4.945 0-9.229-2.359-11.46-6.311-1.119-1.982-2.588-5.99.137-10.51l83.26-137.1c3.316-5.477 8.973-6.068 11.25-6.068 2.279 0 7.936.592 11.26 6.076l83.11 137.1c2.843 4.513 1.343 8.513.243 10.513zm-252.5-87L136 451.5V40c0-4.408-3.594-8.002-8-8.002s-8 3.592-8 8.002v411.5l-74.1-80.85a8.04 8.04 0 0 0-5.906-2.594 7.953 7.953 0 0 0-5.406 2.094c-3.25 3.002-3.469 8.064-.5 11.32l88 96.02c3.062 3.312 8.75 3.312 11.81 0l88-96.02c2.969-3.252 2.75-8.314-.5-11.32-3.198-2.95-8.298-2.75-11.298.55z" />
  </svg>
);

export default SvgArrowDownSquareTriangle;
