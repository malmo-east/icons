import * as React from "react";
import { SVGProps } from "react";

const SvgAustralSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="austral-sign_svg__fa-primary"
      d="M224 32c12.9 0 24.6 7.77 29.5 19.69l160 384.01c6.8 16.3-.9 35-17.2 41.8-17.2 6.8-35-.9-41.8-17.2L224 147.2 93.54 460.3c-6.8 16.3-25.53 24-41.85 17.2-16.31-6.8-24.03-25.5-17.23-41.8L194.5 51.69C199.4 39.77 211.1 32 224 32z"
    />
    <path
      d="M96 288H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h90.7L96 288zm-40 96H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h50.67L56 384zm69.3 0 26.7-64h144l26.7 64H125.3zm240-64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32h-24l-26.7-64zm-40-96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64l-26.7-64zM192 224h64l26.7 64H165.3l26.7-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgAustralSign;
