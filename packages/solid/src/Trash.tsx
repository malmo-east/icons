import * as React from "react";
import { SVGProps } from "react";

const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0h120.4c12.1 0 23.2 6.848 28.6 17.69L320 32h96c17.7 0 32 14.33 32 32s-14.3 32-32 32H32C14.33 96 0 81.67 0 64s14.33-32 32-32h96l7.2-14.31zM394.8 466.1c-1.6 26.2-22.5 45.9-47.9 45.9H101.1c-25.35 0-46.33-19.7-47.91-45.9L31.1 128H416l-21.2 338.1z" />
  </svg>
);

export default SvgTrash;