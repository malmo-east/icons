import * as React from "react";
import { SVGProps } from "react";

const SvgToggleOn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M288 256c0-53.9 42.1-96 96-96 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96zM0 256C0 149.1 85.96 64 192 64h192c106 0 192 85.1 192 192 0 106-86 192-192 192H192C85.96 448 0 362 0 256zm48 0c0 79.5 64.5 144 144 144h192c79.5 0 144-64.5 144-144s-64.5-144-144-144H192c-79.5 0-144 64.5-144 144z" />
  </svg>
);

export default SvgToggleOn;