import * as React from "react";
import { SVGProps } from "react";

const SvgSignal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M288 192c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8s8-3.594 8-8V200c0-4.4-3.6-8-8-8zM32 384c-4.41 0-8 3.6-8 8v112c0 4.406 3.594 8 7.1 8s8.9-3.6 8.9-8V392c0-4.4-3.59-8-8-8zm128-96c-4.4 0-8 3.6-8 8v208c0 4.4 3.6 8 8 8s8-3.594 8-8V296c0-4.4-3.6-8-8-8zM416 96c-4.406 0-8 3.594-8 8v400c0 4.406 3.594 8 8 8s8-3.594 8-8V104c0-4.41-3.6-8-8-8zM544 0c-4.406 0-8 3.594-8 8v496c0 4.406 3.594 8 8 8s8-3.594 8-8V8c0-4.406-3.6-8-8-8z" />
  </svg>
);

export default SvgSignal;
