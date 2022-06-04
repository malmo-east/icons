import * as React from "react";
import { SVGProps } from "react";

const SvgOutdent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="outdent_svg__fa-primary"
      d="M134.2 164.1c10.5-8.2 25.8-.7 25.8 12.6v158.6c0 13.3-15.3 20.8-25.8 12.6L32.24 268.6c-8.24-6.4-8.24-18.8 0-25.2l101.96-79.3z"
    />
    <path
      d="M448 32c17.7 0 32 14.33 32 32s-14.3 32-32 32H64c-17.67 0-32-14.33-32-32s14.33-32 32-32h384zm0 128c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32h192zM224 320c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm224 96c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.67 0-32-14.3-32-32s14.33-32 32-32h384z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgOutdent;
