import * as React from "react";
import { SVGProps } from "react";

const SvgChimney = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M416 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32v312c0 4.4 3.58 8 8 8s8-3.578 8-8v-88h256v88c0 4.422 3.578 8 8 8s8-3.6 8-8v-88h80v88c0 4.422 3.578 8 8 8s8-3.6 8-8V160c17.67 0 32-14.33 32-32V64c0-17.67-14.3-32-32-32zM128 256H48v-96h80v96zM48 368v-96h160v96H48zm176 0v-96h176v96H224zm176-112H144v-96h256v96zm32-128c0 8.822-7.178 16-16 16H32c-8.82 0-16-7.2-16-16V64c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16v64z" />
  </svg>
);

export default SvgChimney;
